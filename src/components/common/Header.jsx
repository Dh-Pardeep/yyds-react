import React from "react";
import navLogo from "../../assets/images/svg/navLogo.svg";
import { Link } from "react-router-dom";
import { navLinks } from "../../utils/Helper";
import { TelegramIcon, TwitterIcon } from "./Icons";
const Header = () => {
  return (
    <div className="border-b border-black">
      <div className="container max-w-[1164px] mx-auto px-3 ">
        <div className="flex items-center justify-between py-4">
          <img src={navLogo} alt="nav icon" />
          <div className="flex items-center gap-8 lg:gap-9 xl:gap-[42px]">
            {navLinks.map((obj, index) => {
              return (
                <Link
                  key={index}
                  to={obj.url}
                  className="font-poppins font-semibold text-[3vw] md:text-base text-black opacity-60 leading-normal hover:text-skyBlue hover:opacity-100 transition-all duration-300 ease-in-out"
                >
                  {obj.link}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-3 items-center">
            <TwitterIcon />
            <TelegramIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
