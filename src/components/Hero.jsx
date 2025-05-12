import React from 'react';
import { assets, cities } from '../assets/assets';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen text-white" style={{ backgroundImage: `url(/src/assets/heroImage.png)` }}>
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0"></div>

      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-24">
        {/* Badge */}
        <div className="animate-fade-in">
          <p className="bg-blue-500/80 backdrop-blur-sm px-4 py-2 rounded-full font-medium text-sm tracking-wide shadow-lg">
            Book Your Dream Stay Today
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mt-6 max-w-2xl leading-tight animate-slide-up">
          Find the Perfect Hotel for Your Next Getaway
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-sm md:text-base max-w-xl text-gray-200 animate-slide-up-delay">
          Explore top-rated luxury resorts, hotels, and villas. Your ultimate travel experience starts now.
        </p>

        {/* Search Form */}
        <form className="bg-white/95 backdrop-blur-md text-gray-600 rounded-xl px-6 py-4 mt-10 flex flex-col md:flex-row gap-4 w-full max-w-4xl shadow-xl animate-fade-in-delay">
          <div className="flex flex-col w-full">
            <label htmlFor="destinationInput" className="text-xs font-medium mb-1">
              Where are you going?
            </label>
            <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 hover:border-blue-500 transition-colors">
              <img src={assets.calenderIcon} alt="Calendar Icon" className="h-4 mr-2" />
              <input
                list="destinations"
                id="destinationInput"
                type="text"
                className="w-full outline-none text-sm bg-transparent"
                placeholder="Enter destination"
                required
              />
              <datalist id="destinations">
                {cities.map((city, index) => (
                  <option key={index} value={city} />
                ))}
              </datalist>
            </div>
          </div>

          {/* Submit button */}
          <div className="flex items-end w-full md:w-auto">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full md:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Search
            </button>
          </div>
        </form>

        {/* Popular Destinations */}
        <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-delay-2">
          <p className="text-sm text-gray-300">Popular:</p>
          {cities.slice(0, 4).map((city, index) => (
            <button
              key={index}
              className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;





