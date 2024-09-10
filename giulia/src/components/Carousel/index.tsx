import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface CarouselProps {
  children: React.ReactNode[];
}

export const Carousel = ({ children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full flex flex-col items-center ">
      <div className="w-full flex justify-between items-center">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
        >
          <FaAngleLeft/>
        </button>
        <div className="w-full mx-4">
          {children[currentIndex]}
        </div>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
        >
          <FaAngleRight/>
        </button>
      </div>
      <div className="mt-2">
        {children.map((_, index) => (
          <span
            key={index}
            className={`inline-block h-2 w-2 rounded-full mx-1 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};
