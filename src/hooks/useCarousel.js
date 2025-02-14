import { useState } from "react";

export const useCarousel = (length) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handlePrev = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? length - 1 : prevIndex - 1
      );
      setIsSliding(false);
    }, 300);
  };

  const handleNext = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === length - 1 ? 0 : prevIndex + 1
      );
      setIsSliding(false);
    }, 300);
  };

  return { currentIndex, handlePrev, handleNext, isSliding };
};
