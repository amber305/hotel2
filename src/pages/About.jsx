import React from 'react';
import { assets } from '../assets/assets';

const team = [
  { name: 'Aditi Chauhan', role: 'Founder & CEO', img: assets.userIcon },
  { name: 'Amber Singh', role: 'Lead Developer', img: assets.userIcon },
  { name: 'Sam Patel', role: 'UI/UX Designer', img: assets.userIcon },
];

const About = () => (
  <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-28 px-4 md:px-16 lg:px-24 xl:px-32">
    {/* Hero Section */}
    <div className="text-center mb-16 animate-fade-in">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">About QuickStay</h1>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto">QuickStay is dedicated to making your travel experience seamless, comfortable, and memorable. We connect you with the best hotels and unique stays around the world.</p>
    </div>
    {/* Mission Section */}
    <div className="mb-16 flex flex-col md:flex-row items-center gap-12 animate-fade-in-delay">
      <img src={assets.logo} alt="QuickStay Logo" className="h-24 mb-6 md:mb-0 md:mr-10" />
      <div className="text-left max-w-xl">
        <h2 className="font-playfair text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
        <p className="text-gray-600 text-base">To empower travelers with easy access to the world's best accommodations, providing exceptional service, innovative features, and a platform you can trust. We believe every journey should be special, and we're here to help you make the most of yours.</p>
      </div>
    </div>
    {/* Team Section */}
    <div className="mb-10 animate-fade-in-delay-2">
      <h2 className="font-playfair text-2xl font-semibold text-gray-800 text-center mb-8">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-60 hover:shadow-2xl transition-all duration-300">
            <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mb-4 border-4 border-blue-100 object-cover" />
            <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About; 