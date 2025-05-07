import React from 'react';
import { assets } from '../assets/assets';
import Title from './Title';

const NewsLetter = () => {
  // Handle form submission (you can expand this in the future)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your subscribe logic here
    alert('Subscribed successfully!');
  };

  return (
    <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-6 py-12 md:py-16 mx-4 lg:mx-auto my-12 bg-gray-800 text-white shadow-xl hover:shadow-2xl transition-all">
      
      {/* Title and subtitle */}
      <Title title="Stay Inspired" subTitle="Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration." />
          
      {/* Form with email input and subscribe button */}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 w-full">
        <input 
          type="email" 
          className="bg-white/10 px-5 py-3 border border-white/30 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 max-w-md w-full transition-all"
          placeholder="Enter your email" 
          aria-label="Email address" 
          required
          aria-describedby="privacyNotice"
        />
        <button 
          type="submit"
          className="flex items-center justify-center gap-3 group bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 active:scale-95"
          aria-label="Subscribe to newsletter"
        >
          <span className="font-semibold">Subscribe</span>
          <img 
            src={assets.arrowIcon} 
            alt="arrow-icon" 
            className="w-4 invert group-hover:translate-x-2 transition-all" 
          />
        </button>
      </form>
        
      {/* Privacy notice */}
      <p id="privacyNotice" className="text-gray-400 mt-4 text-xs text-center">
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
      </p>
    </div>
  );
};

export default NewsLetter;



