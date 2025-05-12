import React from 'react';
import { assets } from '../assets/assets';

const experiences = [
  {
    title: 'Luxury Spa Retreats',
    desc: 'Relax and rejuvenate with world-class spa treatments in serene settings.',
    icon: assets.poolIcon,
  },
  {
    title: 'Adventure Activities',
    desc: 'From mountain hikes to water sports, enjoy thrilling experiences curated for you.',
    icon: assets.mountainIcon,
  },
  {
    title: 'Gourmet Dining',
    desc: 'Savor exquisite cuisines prepared by top chefs in beautiful ambiances.',
    icon: assets.freeBreakfastIcon,
  },
  {
    title: 'Cultural Tours',
    desc: 'Immerse yourself in local culture with guided tours and authentic experiences.',
    icon: assets.locationFilledIcon,
  },
];

const Experience = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 px-4 md:px-16 lg:px-24 xl:px-32">
    {/* Hero Section */}
    <div className="text-center mb-16 animate-fade-in">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">Unforgettable Experiences</h1>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto">Discover unique hotel experiences designed to make your stay truly memorable. From adventure to relaxation, we have something for everyone.</p>
    </div>
    {/* Experiences Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-delay">
      {experiences.map((exp, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300">
          <img src={exp.icon} alt={exp.title} className="w-14 h-14 mb-4" />
          <h2 className="font-playfair text-xl font-semibold text-gray-800 mb-2">{exp.title}</h2>
          <p className="text-gray-500 text-sm">{exp.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Experience; 