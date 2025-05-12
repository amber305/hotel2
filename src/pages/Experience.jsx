import React from 'react';
import { motion } from 'framer-motion';
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

const bgUrl = 'https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=1200&q=80';

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.8 } },
};

const Experience = () => (
  <div className="relative min-h-screen pt-28 px-4 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-50 overflow-hidden">
    {/* Decorative BG */}
    <div className="absolute inset-0 z-0">
      <img src={bgUrl} alt="Trip" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/60 via-white/60 to-pink-100/60" />
    </div>
    {/* Hero Section */}
    <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center mb-16">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-blue-900 mb-4 drop-shadow">Unforgettable Experiences Await</h1>
      <p className="text-lg text-blue-700 max-w-2xl mx-auto">At QuickStay, we believe your stay should be more than just a room. Discover a world of unique experiences, curated for every kind of traveler. Whether you seek relaxation, adventure, or cultural immersion, we have something special for you.</p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <span className="px-4 py-2 bg-blue-200 text-blue-900 rounded-full font-medium text-sm shadow">Spa & Wellness</span>
        <span className="px-4 py-2 bg-yellow-200 text-yellow-900 rounded-full font-medium text-sm shadow">Adventure</span>
        <span className="px-4 py-2 bg-pink-200 text-pink-900 rounded-full font-medium text-sm shadow">Dining</span>
        <span className="px-4 py-2 bg-green-200 text-green-900 rounded-full font-medium text-sm shadow">Culture</span>
        <span className="px-4 py-2 bg-purple-200 text-purple-900 rounded-full font-medium text-sm shadow">Family</span>
      </div>
    </motion.div>
    {/* Experiences Grid */}
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-delay">
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 group backdrop-blur-md border border-blue-100"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-200 transition-colors shadow">
            <img src={exp.icon} alt={exp.title} className="w-12 h-12" />
          </div>
          <h2 className="font-playfair text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">{exp.title}</h2>
          <p className="text-blue-700 text-sm">{exp.desc}</p>
        </motion.div>
      ))}
    </div>
    {/* Call to Action */}
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative z-10 mt-32 text-center animate-fade-in-delay-2">
      <h2 className="font-playfair text-2xl font-bold text-blue-900 mb-4">Ready to Make Memories?</h2>
      <p className="text-blue-700 mb-6">Book your stay with QuickStay and unlock exclusive experiences tailored just for you.</p>
      <a href="/rooms" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all">Explore Hotels</a>
    </motion.div>
  </div>
);

export default Experience; 