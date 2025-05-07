import React from 'react';
import { assets, cities } from '../assets/assets';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen text-white" style={{ backgroundImage: `url(/src/assets/heroImage.png)` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-24">
        <p className="bg-blue-500/70 px-4 py-2 rounded-full font-medium text-sm tracking-wide">
          Book Your Dream Stay Today
        </p>

        <h1 className="font-playfair text-4xl md:text-5xl font-bold mt-6 max-w-2xl leading-tight">
          Find the Perfect Hotel for Your Next Getaway
        </h1>

        <p className="mt-4 text-sm md:text-base max-w-xl">
          Explore top-rated luxury resorts, hotels, and villas. Your ultimate travel experience starts now.
        </p>

        {/* Form */}
        <form className="bg-white text-gray-600 rounded-xl px-6 py-4 mt-10 flex flex-col md:flex-row gap-4 w-full max-w-4xl shadow-lg">
          <div className="flex flex-col w-full">
            <label htmlFor="destinationInput" className="text-xs font-medium mb-1">
              Where are you going?
            </label>
            <div className="flex items-center border border-gray-200 rounded px-2 py-1.5">
              <img src={assets.calenderIcon} alt="Calendar Icon" className="h-4 mr-2" />
              <input
                list="destinations"
                id="destinationInput"
                type="text"
                className="w-full outline-none text-sm"
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
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-all w-full md:w-auto"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;





