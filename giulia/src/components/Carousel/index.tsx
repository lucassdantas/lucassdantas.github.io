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
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full flex justify-between items-center">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300"
        >
          <FaAngleLeft/>
        </button>
        <div className="w-full mx-4">
          {children[currentIndex]}
        </div>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300"
        >
          <FaAngleRight/>
        </button>
      </div>

      <div className="mt-2 text-gray-800">
        <span>{currentIndex+1}/{children.length}</span>
      </div>
    </div>
  );
};
