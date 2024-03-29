import React from "react";
import heroBG from "../../assets/images/webp/hero_bg.webp";
import { HeroRedText } from "../common/Icons";
import leftImage from "../../assets/images/svg/herostar.svg";
import rightImage from "../../assets/images/svg/heroright.svg";
import heroBGDown from "../../assets/images/svg/hero-bg-down-image.svg";
import herobacgroundimageleft from "../../assets/images/svg/herobacgroundimageleft.svg";
import herobacgroundimageright from "../../assets/images/svg/herobacgroundimageright.svg";
const Hero = () => {
  return (
    <div className="relative">
      <HeroRedText className="absolute left-[30%] top-14 hidden lg:block" />
      <img
        src={herobacgroundimageleft}
        className="absolute left-0 w-[135px] sm:w-[220px] md:w-[280px] mix-blend-darken "
        alt="hero image"
      />
      <img
        src={herobacgroundimageright}
        className="absolute right-0 bottom-[-19%] sm:bottom-[-15%] sm:w-[180px] w-[100px] lg:bottom-[-31%] md:w-[280px] mix-blend-darken"
        alt="hero image"
      />
      <img
        className="absolute mix-blend-darken left-[50%] lg:left-[18%] bottom-0 w-[85px] md:w-[117px] "
        src={leftImage}
        alt="side img"
      />
      <img
        className="absolute mix-blend-darken right-0 top-12 w-[220px] hidden lg:block"
        src={rightImage}
        alt="side img"
      />
      <div
        className="container max-w-[1164px] mx-auto px-3 py-12 sm:py-16 md:py-20 lg:pt-28  xl:py-[134px] lg:pb-[95px] lg:h-[100vh-101px] flex items-center justify-center"
        id="team"
      >
        <div className="flex items-center justify-center flex-col lg:flex-row relative z-10">
          <div className="w-full lg:w-1/2">
            <h2 className="font-indieFlower font-normal text-4xl lg:text-[56px] xl:text-6xl !leading-lh131 text_border_one pb-3 lg:max-w-[558px] text_border_hero">
              Laughing All the Way to the Coin Bank
            </h2>
            <p className="lg:max-w-[510px] text-lightBlack/60 font-poppins font-normal leading-lh138">
              Welcome to YYDS, where the world of numismatics meets the realm of
              laughter.
            </p>
            <div className=" pt-10 pb-6 flex items-center gap-4 xs:gap-2 flex-col xs:flex-row">
              <button className="bg-[url(/src/assets/images/svg/button-bg.svg)] bg-center bg-[length:100%_100%] bg-no-repeat  px-10 lg:px-[52px] py-5 lg:pt-[23px] lg:pb-[26px] bg-yellowRed">
                Buy Token
              </button>
              <button className="bg-[url(/src/assets/images/svg/button-bg.svg)] bg-center bg-[length:100%_100%] bg-no-repeat  px-10 lg:px-[52px] py-5 lg:pt-[23px] lg:pb-[26px]  bg-gray">
                Our Telegram
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <img
              className="mix-blend-darken  w-full max-w-[644px] mx-auto "
              src={heroBG}
              alt="hero background image"
            />
            <img
              className="!mix-blend-darken absolute bottom-[-10%] w-[85px] left-0"
              src={heroBGDown}
              alt="hero background image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
