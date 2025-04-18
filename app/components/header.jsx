"use client"; 
import Link from 'next/link';
import { Rubik } from "next/font/google";
import { motion } from 'framer-motion';

const rubikFont = Rubik({
  subsets:["latin"],
  weight:"900",
  variable:"--font-rubik",
});

export default function Header() {
  return (
    <div className={`${rubikFont.variable}`}>
    <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-teal-500 py-6 text-white text-center">
      <Link href="/">
        <h1 className={'text-4xl font-bold font-head'}>Pet Lovers' Paradise</h1>
      </Link>
    </motion.header>
    </div>
  );
}
