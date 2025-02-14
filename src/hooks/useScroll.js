import { useState, useEffect } from "react";

const useScroll = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Jika posisi scroll di atas (0,0), hilangkan shadow
      setHasShadow(currentScrollY > 0);

      // Menentukan apakah banner terlihat saat scroll
      setIsBannerVisible(currentScrollY <= lastScrollY);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isBannerVisible, hasShadow };
};

export default useScroll;
