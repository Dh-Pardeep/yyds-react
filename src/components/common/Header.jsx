import React, { useEffect, useState } from "react";
import navLogo from "../../assets/images/svg/navLogo.svg";
import { Link } from "react-router-dom";
import { navLinks } from "../../utils/Helper";
import { TelegramIcon, TwitterIcon } from "./Icons";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const [shownavbar, setShownavbar] = useState(false);
  const closenav = () => {
    setShownavbar(!shownavbar);
  };
  useEffect(() => {
    const body = document.body;
    if (shownavbar) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [shownavbar]);
  return (
    <div className="border-b border-black">
      <div className="container max-w-[1164px] mx-auto px-3 ">
        <div className="flex items-center justify-between py-4">
          <img src={navLogo} alt="nav icon" />
          <div
            className={`flex items-center gap-8 lg:gap-9 xl:gap-[42px] flex-col justify-center md:flex-row  absolute position_unset top-0 w-full transition-all duration-300 ease-linear left-0 ${
              shownavbar
                ? "top-0 h-screen bg-white z-10 w-full "
                : "h-full bg-transparent top-[-100%] "
            }`}
          >
            {navLinks.map((obj, index) => {
              return (
                <Link
                  key={index}
                  to={obj.url}
                  className="font-poppins font-semibold text-[4vw] md:text-base text-black opacity-60 leading-normal hover:text-skyBlue hover:opacity-100 transition-all duration-300 ease-in-out"
                >
                  {obj.link}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-3 items-center">
            <Link
              to="http://www.twitter.com"
              target="_blank"
              className="hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <TwitterIcon />
            </Link>
            <Link
              to="http://www.telegram.com"
              target="_blank"
              className="hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <TelegramIcon />
            </Link>
          </div>
          <div className="md:hidden  z-20 " onClick={closenav}>
            {shownavbar ? (
              <RxCross1 fontSize={35} />
            ) : (
              <RxHamburgerMenu fontSize={35} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
