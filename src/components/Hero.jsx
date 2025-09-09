"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center 
      bg-gradient-to-br from-purple-800 via-indigo-900 to-black text-white p-6 relative overflow-hidden">
      
      {/* Floating gradient circles */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl top-20 left-10 animate-pulse"
      ></motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl bottom-20 right-10 animate-pulse"
      ></motion.div>

      {/* Left Content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="md:w-1/2 z-10"
      >
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight 
            text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300"
        >
          We Design. We Build. We Transform.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mb-6 text-base md:text-lg text-gray-200"
        >
          Creative digital solutions for brands worldwide.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0px 0px 15px rgba(255, 180, 0, 0.7)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 
            text-black font-bold rounded-full shadow-lg cursor-pointer transition"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="md:w-1/2 flex justify-center mt-10 md:mt-0 z-10"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Hero"
          className="rounded-2xl shadow-2xl w-3/4 cursor-pointer"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        />
      </motion.div>
    </section>
  );
}
