import React, { useState } from 'react';
import Title from '../../components/Title';

const ListRoom = () => {
  // Dummy room data
  const roomsDummyData = [
    {
      roomType: "Deluxe Room",
      amenities: ["Air Conditioning", "Free Wi-Fi", "Mini Bar", "TV"],
      pricePerNight: "$150",
      isAvailable: true,
    },
    {
      roomType: "Standard Room",
      amenities: ["Free Wi-Fi", "TV", "Desk"],
      pricePerNight: "$100",
      isAvailable: false,
    },
    {
      roomType: "Suite Room",
      amenities: ["Air Conditioning", "Free Wi-Fi", "Mini Bar", "Living Room", "Balcony"],
      pricePerNight: "$300",
      isAvailable: true,
    },
  ];

  const [rooms] = useState(roomsDummyData);

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />
      <p className="text-gray-500 mt-8">All Rooms</p>
      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">Facility</th>
              <th className="py-3 px-4 text-gray-800 font-medium">Price / night</th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  {item.roomType}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                  {item.amenities.join(', ')}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  {item.pricePerNight}
                </td>
                <td className="py-3 px-4 border-t border-gray-300 text-center text-sm">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                      readOnly
                    />
                    <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition duration-200"></div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;



