import React, { useState } from 'react';
import Title from '../components/Title';
import { assets, userBookingsDummyData } from '../assets/assets';

const MyBookings = () => {
  const [bookings] = useState(userBookingsDummyData);

  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
      <Title
        title='My Bookings'
        subTitle='Easily manage your past, current, and upcoming hotel reservations in one place.'
        align='left'
      />

      <div className='max-w-6xl mt-8 w-full text-gray-800'>
        <div className='hidden md:grid grid-cols-[3fr_2fr_1fr] border-b font-medium text-base py-3'>
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>

        {bookings.map((booking) => (
          <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] border-b py-6 first:border-t'>
            {/* 🏨 Hotel Info */}
            <div className='flex flex-col md:flex-row'>
              <img src={booking.room.images[0]} alt="hotel" className='md:w-44 rounded shadow object-cover' />
              <div className='flex flex-col gap-1.5 mt-3 md:mt-0 md:ml-4'>
                <p className='font-playfair text-2xl'>
                  {booking.hotel.name}
                  <span className='text-sm font-inter'> ({booking.room.roomType})</span>
                </p>
                <div className='text-sm text-gray-500 flex gap-1'>
                  <img src={assets.locationIcon} alt="location" />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className='text-sm text-gray-500 flex gap-1'>
                  <img src={assets.guestsIcon} alt="guests" />
                  <span>Guests: {booking.guests}</span>
                </div>
                <p>Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/* 📅 Dates */}
            <div className='flex flex-row md:items-center gap-8 mt-3 md:mt-0'>
              <div>
                <p>Check-In:</p>
                <p className='text-gray-500 text-sm'>
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>
              <div>
                <p>Check-Out:</p>
                <p className='text-gray-500 text-sm'>
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>

            {/* 💳 Payment Status */}
            <div className='flex flex-col justify-center pt-3 md:pt-0'>
              <div className='flex items-center gap-2'>
                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                <p className='text-sm'>
                  {booking.isPaid ? 'Paid' : 'Unpaid'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;


