import React from "react";
import leftImage from "../../assets/images/svg/aboutLeftSide.svg";
import rightImage from "../../assets/images/svg/aboutRightSide.svg";
const About = () => {
  return (
    <div className="relative">
      {/* <img className="absolute mix-blend-darken left-0 top-0" src={leftImage} alt="side img" />
    <img className="absolute mix-blend-darken right-0 bottom-0" src={rightImage} alt="side img" /> */}
      <div className="container max-w-[1164px] mx-auto px-3 py-12 sm:py-16 md:py-20 lg:pt-28  xl:py-[130px] lg:pb-[105px]">
        <h2 className="text-saffron font-indieFlower font-normal leading-lh131 text-2xl text-center text_border_half_orange">
          About Us
        </h2>
        <h2 className="common_heading text_border_one mb-6">
          Introducing $YYDS
        </h2>
        <p className="font-poppins text-sm sm:text-base leading-lh138 font-normal text-lightBlack opacity-60 text-center max-w-[685px] mx-auto">
          In the meme universe, 财神YYDS, born from "永远的神" and traditional
          财神, wielded his 富贵宝鼎 to spread enduring humor and positivity,
          undeterred by Trolls, championing the eternal value of joy. 
        </p>
        <p className="font-poppins text-sm sm:text-base leading-lh138 font-normal text-lightBlack opacity-60 text-center max-w-[638px] mx-auto mt-2">
          This meme deity was no ordinary figure; he symbolized not just
          material affluence, but also a treasure trove of positivity, humor,
          and good vibes. The birth of 财神YYDS marked a rare event. While most
          memes experienced fleeting popularity, 财神YYDS, drawing from the
          essence of "永远的神" or "forever god-like", merged with the
          time-honored 财神 to stand eternal, continuously cherished by meme
          aficionados.
        </p>
        <div className="flex justify-center items-center pt-10 pb-6">
          <button className="bg-[url(/src/assets/images/svg/button-bg.svg)] bg-center bg-[length:100%_100%] bg-no-repeat  px-10 lg:px-[56px] py-5 lg:pt-[23px] lg:pb-[26px] ">
            {" "}
            Learn More
          </button>
        </div>
        <div className="w-full max-w-[606px] h-[1px] bg-black mx-auto"></div>
      </div>
    </div>
  );
};

export default About;
