import React, { useEffect, useState } from "react";
import banner from '../assets/banner.png'

export default function Banner(){
const slides = [
  { id: 1, url: "https://thumbs.dreamstime.com/z/blood-donation-182573750.jpg" },
  { id: 2, url: "https://tse3.mm.bing.net/th/id/OIP.-HT-Fiwj-UvEQngsIjjIBgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 3, url: "https://tse2.mm.bing.net/th/id/OIP.A-i1aqnQkZ9jifi7xx52tgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
];
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <img
              src={slide.url}
              alt={`Slide ${slide.id}`}
              className=" w-screen h-[40vh] xl:h-[50vh] object-fill"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

