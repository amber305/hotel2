import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={'/room/' + room._id}
      onClick={() => window.scrollTo(0, 0)}
      className="relative w-full sm:max-w-[80%] md:max-w-[320px] rounded-2xl overflow-hidden bg-white text-gray-600 shadow-md transition-transform hover:-translate-y-1 duration-300"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={room?.images?.[0] || assets.defaultImage}
          alt={`${room?.hotel?.name || 'Hotel'} room`}
          className="w-full h-full object-cover"
        />
      </div>

      {index % 2 === 0 && (
        <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow-sm">
          Best Seller
        </p>
      )}

      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-800">
            {room?.hotel?.name || 'Hotel Name'}
          </p>
          <div className="flex items-center gap-1">
            <img
              src={assets.starIconFilled}
              alt="star icon"
              className="w-4 h-4"
              aria-hidden="true"
            />
            <span>4.5</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm mt-1">
          <img
            src={assets.locationIcon}
            alt="location icon"
            className="w-4 h-4"
            aria-hidden="true"
          />
          <span>{room?.hotel?.address || 'Hotel Address'}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-xl text-gray-800">
              ${parseFloat(room?.pricePerNight || 0).toFixed(2)}
            </span>
            <span className="text-sm"> /night</span>
          </p>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer"
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



