import React, { useState } from "react";
// import "./Carousel.css"; // For any additional custom styles

// const items = [
//   "items 1",
//   "items 2",
//   "items 3",
//   "items 4",
// ];

const VerticalCarousel = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-64 w-32 overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
        <div className="snap-center p-4">
          <select className="w-full p-2 border rounded-lg">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;
