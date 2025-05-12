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
  {
    title: 'Private Beach Access',
    desc: 'Enjoy exclusive access to pristine beaches and private cabanas.',
    icon: assets.poolIcon,
  },
  {
    title: 'City Nightlife',
    desc: 'Experience the vibrant nightlife with curated events and parties.',
    icon: assets.homeIcon,
  },
  {
    title: 'Family Fun',
    desc: 'Fun-filled activities and entertainment for all ages.',
    icon: assets.guestsIcon,
  },
  {
    title: 'Wellness Programs',
    desc: 'Yoga, meditation, and wellness retreats for mind and body.',
    icon: assets.badgeIcon,
  },
];

const Experience = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-28 px-4 md:px-16 lg:px-24 xl:px-32">
    {/* Hero Section */}
    <div className="text-center mb-16 animate-fade-in">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-blue-900 mb-4">Unforgettable Experiences Await</h1>
      <p className="text-lg text-blue-700 max-w-2xl mx-auto">At QuickStay, we believe your stay should be more than just a room. Discover a world of unique experiences, curated for every kind of traveler. Whether you seek relaxation, adventure, or cultural immersion, we have something special for you.</p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium text-sm shadow">Spa & Wellness</span>
        <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-medium text-sm shadow">Adventure</span>
        <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-medium text-sm shadow">Dining</span>
        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium text-sm shadow">Culture</span>
        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium text-sm shadow">Family</span>
      </div>
    </div>
    {/* Experiences Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-delay">
      {experiences.map((exp, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 group">
          <div className="bg-blue-50 p-4 rounded-full mb-4 group-hover:bg-blue-100 transition-colors">
            <img src={exp.icon} alt={exp.title} className="w-12 h-12" />
          </div>
          <h2 className="font-playfair text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">{exp.title}</h2>
          <p className="text-blue-700 text-sm">{exp.desc}</p>
        </div>
      ))}
    </div>
    {/* Call to Action */}
    <div className="mt-20 text-center animate-fade-in-delay-2">
      <h2 className="font-playfair text-2xl font-bold text-blue-900 mb-4">Ready to Make Memories?</h2>
      <p className="text-blue-700 mb-6">Book your stay with QuickStay and unlock exclusive experiences tailored just for you.</p>
      <a href="/rooms" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all">Explore Hotels</a>
    </div>
  </div>
);

export default Experience; 