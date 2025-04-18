"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs"; 
import { motion } from "framer-motion";
import { Menu, X, Briefcase, Info, Mail, LogIn, UserPlus, User, Home } from "lucide-react";

export default function NavBar() {
  const { userId, signOut } = useAuth(); 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      className="bg-teal-500 text-white p-4">
      <section className="container mx-auto flex justify-between items-center">
        
        <section className="flex items-center justify-between w-full sm:w-auto">
          
          <Link href="/" className="flex items-center text-lg sm:text-xl font-bold">
            <Home size={18} className="mr-2" /> 
            Home
          </Link>

          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden ml-auto text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </section>

        
        <section className="hidden sm:flex items-center space-x-6">
          <Link
            href={userId ? "/dashboard" : "/sign-in"}
            className="flex items-center text-lg hover:text-gray-300"
          >
            <Briefcase size={18} className="mr-2" />
            Services
          </Link>
          <Link href="/about" className="flex items-center text-lg hover:text-gray-300">
            <Info size={18} className="mr-2" />
            About
          </Link>
          <Link href="/contact" className="flex items-center text-lg hover:text-gray-300">
            <Mail size={18} className="mr-2" />
            Contact
          </Link>
        </section>

        
        <section className="hidden sm:flex items-center space-x-6">
          {!userId ? (
            <>
              <Link href="/sign-in" className="flex items-center text-lg hover:text-gray-300">
                <LogIn size={18} className="mr-2" />
                Sign in
              </Link>
              <Link href="/sign-up" className="flex items-center text-lg hover:text-gray-300">
                <UserPlus size={18} className="mr-2" />
                Sign up
              </Link>
            </>
          ) : (
            <>
              
              <Link href="/profile" className="flex items-center text-lg hover:text-gray-300">
                <User size={18} className="mr-2" />
                Profile
              </Link>

              
              <button
                onClick={() => signOut()}
                className="flex items-center text-lg hover:text-gray-300"
              >
                <LogIn size={18} className="mr-2" />
                Sign out
              </button>
            </>
          )}
        </section>
      </section>

      
      {isOpen && (
        <section className="sm:hidden mt-4 flex flex-col items-center gap-4">
          <Link
            href={userId ? "/dashboard" : "/sign-in"}
            className="flex items-center text-lg hover:text-gray-300"
          >
            <Briefcase size={18} className="mr-2" />
            Services
          </Link>
          <Link href="/about" className="flex items-center text-lg hover:text-gray-300">
            <Info size={18} className="mr-2" />
            About
          </Link>
          <Link href="/contact" className="flex items-center text-lg hover:text-gray-300">
            <Mail size={18} className="mr-2" />
            Contact
          </Link>
          {!userId ? (
            <>
              <Link href="/sign-in" className="flex items-center text-lg hover:text-gray-300">
                <LogIn size={18} className="mr-2" />
                Sign in
              </Link>
              <Link href="/sign-up" className="flex items-center text-lg hover:text-gray-300">
                <UserPlus size={18} className="mr-2" />
                Sign up
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile" className="flex items-center text-lg hover:text-gray-300">
                <User size={18} className="mr-2" />
                Profile
              </Link>

              <button
                onClick={() => signOut()}
                className="flex items-center text-lg hover:text-gray-300"
              >
                <LogIn size={18} className="mr-2" />
                Sign out
              </button>
            </>
          )}
        </section>
      )}
    </motion.nav>
  );
}
