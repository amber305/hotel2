import React from "react";

const StarRating = ({ rating = 0 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? true : false;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push("★");
  }
  if (halfStar) stars.push("☆");
  for (let i = stars.length; i < 5; i++) {
    stars.push("☆");
  }

  return (
    <div className="text-yellow-500">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default StarRating;


