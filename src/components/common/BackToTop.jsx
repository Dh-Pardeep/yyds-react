"use client";
import { useEffect, useState } from "react";
import { VscArrowUp } from "react-icons/vsc";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-0 m-4 p-2 right-0 bg-yellowRed text-white rounded-full transition-opacity duration-300 z-50 border border-white hover:bg-black`}
      onClick={scrollToTop}
      aria-label="Back to Top"
    >
      <VscArrowUp fontSize={25}/>
    </button>
  );
};

export default BackToTop;
