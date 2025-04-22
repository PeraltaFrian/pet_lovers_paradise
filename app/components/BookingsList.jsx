"use client";

import React, { useEffect, useState } from 'react';
import { useUser } from "@clerk/nextjs";
import {
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

const statusIcons = {
  active: { icon: <CheckCircleIcon className="h-5 w-5 text-green-500" />, label: 'Active' },
  completed: { icon: <ClockIcon className="h-5 w-5 text-gray-500" />, label: 'Completed' },
  canceled: { icon: <XCircleIcon className="h-5 w-5 text-red-500" />, label: 'Canceled' },
  cancelled: { icon: <XCircleIcon className="h-5 w-5 text-red-500" />, label: 'Cancelled' },
};

const BookingsList = ({ refreshTrigger }) => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch('/api/calendly/bookings');
        const data = await res.json();

        if (res.ok) {
          const statusPriority = { active: 1, completed: 2, canceled: 3, cancelled: 3 };

          const sortedBookings = data.events?.sort((a, b) => {
            const statusDiff = statusPriority[a.status.toLowerCase()] - statusPriority[b.status.toLowerCase()];
            if (statusDiff !== 0) return statusDiff;
            return new Date(b.start_time) - new Date(a.start_time);
          });

          setBookings(sortedBookings || []);

          const clerkEmail = user?.primaryEmailAddress?.emailAddress || "";
          const filtered = sortedBookings?.filter((event) =>
            event.invitees?.some((invitee) =>
              invitee.email.toLowerCase() === clerkEmail.toLowerCase()
            )
          );

          setFilteredBookings(filtered || []);
        } else {
          setError(data.error || 'An error occurred');
        }
      } catch (err) {
        setError('Failed to fetch bookings');
      }
    };

    if (user) {
      fetchBookings();
    }
  }, [user, refreshTrigger]); 

  return (
    <div className="mt-8 w-full max-w-4xl px-4">
      {error && <p className="text-red-500">{error}</p>}
      {filteredBookings.length === 0 ? (
        <p className="text-gray-500">No bookings found for your account.</p>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="px-4 py-2 text-left">Start Time</th>
              <th className="px-4 py-2 text-left">End Time</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Invitees</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((event, idx) => {
              const statusKey = event.status.toLowerCase();
              const statusData = statusIcons[statusKey] || { icon: null, label: event.status };

              return (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{new Date(event.start_time).toLocaleString()}</td>
                  <td className="px-4 py-2">{new Date(event.end_time).toLocaleString()}</td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    {statusData.icon}
                    <span className="capitalize">{statusData.label}</span>
                  </td>
                  <td className="px-4 py-2">
                    {event.invitees?.length > 0
                      ? event.invitees.map((inv) => inv.email).join(", ")
                      : "No invitees"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingsList;
