import React from 'react';
import Title from './Title';
import { testimonials } from '../assets/assets';
import StartRating from './StarRating';

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      {/* Title and Subtitle */}
      <Title title="What Our Guests Say" subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world." />

      {/* Testimonial Cards */}
      <div className="flex flex-wrap items-center gap-8 mt-20 mb-10 justify-center">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-xs w-full">
            {/* Testimonial Header: Name, Address */}
            <div className="flex items-center gap-4 mb-4">
              <img className="w-16 h-16 rounded-full border-2 border-blue-500" src={testimonial.image} alt={testimonial.name} />
              <div>
                <p className="font-playfair text-xl font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.address}</p>
              </div>
            </div>
            
            {/* Star Rating */}
            <div className="flex items-center gap-1 mt-2">
              <StartRating />
            </div>

            {/* Testimonial Review */}
            <p className="text-gray-600 mt-6 text-base italic">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;


