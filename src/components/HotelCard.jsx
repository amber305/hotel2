import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="group relative w-full sm:max-w-[80%] md:max-w-[320px] rounded-2xl overflow-hidden bg-white text-gray-600 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={room?.images?.[0] || assets.defaultImage}
          alt={`${room?.hotel?.name || 'Hotel'} room`}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      {index % 2 === 0 && (
        <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white/90 backdrop-blur-sm text-gray-800 font-medium rounded-full shadow-sm">
          Best Seller
        </p>
      )}

      <div className="p-5">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
            {room?.hotel?.name || 'Hotel Name'}
          </p>
          <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
            <img
              src={assets.starIconFilled}
              alt="star icon"
              className="w-4 h-4"
              aria-hidden="true"
            />
            <span className="text-sm font-medium">4.5</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm mt-2 text-gray-500">
          <img
            src={assets.locationIcon}
            alt="location icon"
            className="w-4 h-4"
            aria-hidden="true"
          />
          <span className="line-clamp-1">{room?.hotel?.address || 'Hotel Address'}</span>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-semibold text-gray-800">
              ${parseFloat(room?.pricePerNight || 0).toFixed(2)}
            </span>
            <span className="text-sm text-gray-500"> /night</span>
          </div>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
            aria-label="Book now"
          >
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;



