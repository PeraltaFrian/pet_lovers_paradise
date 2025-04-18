"use client"; 
import React, { useState, useEffect } from 'react'; 
import { useUser } from '@clerk/nextjs';
import Button from "../components/Button"; 

const ContactPage = () => { 
  const { user } = useUser(); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    reason: '', 
  });

  const [errors, setErrors] = useState({
    email: '',
    message: '',
  });

  useEffect(() => { 
    
    if (user) { 
      setFormData({ 
        name: user.firstName || '', 
        email: user.emailAddresses[0]?.emailAddress || '', 
        message: '', 
        reason: '', 
      }); 
    } else {
      
      setFormData({ 
        name: '', 
        email: '', 
        message: '', 
        reason: '', 
      });
    }
  }, [user]); 

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: value, 
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      formIsValid = false;
      errors.email = 'Please enter a valid email address.';
    }

    if (formData.message.trim().length < 10) {
      formIsValid = false;
      errors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Form submitted successfully!');
      
      
      setFormData({
        name: '',
        email: '',
        message: '',
        reason: '',
      });

      setErrors({
        email: '',
        message: '',
      });
    } else {
      alert('Please fix the errors in the form.');
    }
  };

  return (
    <div className="flex justify-center items-center bg-teal-500 py-2 rounded-2xl">  
      <section className="bg-white rounded-2xl p-12 w-full max-w-4xl border-4 border-teal-500">
        <section className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-500 mb-6">
            We would love to hear from you! If you have any questions, suggestions, or feedback, feel free to reach out to us.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="space-y-6">
          <section>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </section>

          <section>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </section>

          <section>
            <label htmlFor="reason" className="block text-lg font-semibold text-gray-800 mb-2">
              Reason for Contact
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select a reason</option>
              <option value="Adoption Inquiry">Adoption Inquiry</option>
              <option value="Service Request">Service Request</option>
              <option value="Feedback">Feedback</option>
            </select>
          </section>

          <section>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </section>

          <section className="text-center">
            <Button
              text="Submit"
              onClick={handleSubmit}  
            />
          </section>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
