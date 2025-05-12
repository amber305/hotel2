import React from 'react';
import { motion } from 'framer-motion';
import aditiImg from '../assets/aditi-chaudhary.jpeg';

const team = [
  { name: 'Aditi Chaudhary', role: 'Developer & Creator', img: aditiImg },
];

const About = () => (
  <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-28 px-4 md:px-16 lg:px-24 xl:px-32">
    {/* Hero Section */}
    <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16 animate-fade-in">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-blue-900 mb-4">About This Project</h1>
      <p className="text-lg text-blue-700 max-w-2xl mx-auto">QuickStay is a modern hotel booking platform crafted with passion and precision by Aditi Chaudhary. The vision: to make travel seamless, stylish, and memorable for everyone.</p>
    </motion.div>
    {/* Mission Section */}
    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-16 flex flex-col md:flex-row items-center gap-12 animate-fade-in-delay justify-center">
      <div className="text-left max-w-xl bg-white/80 rounded-2xl shadow-lg p-8">
        <h2 className="font-playfair text-2xl font-semibold text-blue-900 mb-2">A Note from the Creator</h2>
        <p className="text-blue-700 text-base">"I built QuickStay to empower travelers with a beautiful, intuitive, and reliable platform. Every feature and design choice is made to enhance your journey, from booking to check-out. Thank you for being a part of this adventure!"</p>
        <p className="mt-4 text-blue-900 font-semibold">— Aditi Chaudhary</p>
      </div>
    </motion.div>
    {/* Team Section */}
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="mb-10 animate-fade-in-delay-2">
      <h2 className="font-playfair text-2xl font-semibold text-blue-900 text-center mb-8">Meet the Creator</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {team.map((member, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.6 }} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-60 hover:shadow-2xl transition-all duration-300">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4 border-4 border-blue-200 object-cover shadow" />
            <h3 className="font-playfair text-lg font-semibold text-blue-900 mb-1">{member.name}</h3>
            <p className="text-blue-700 text-sm">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default About; 