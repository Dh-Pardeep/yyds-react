import React from "react";
import buidlersBG from '../../assets/images/webp/builders-bg.webp'
import leftImage from '../../assets/images/svg/buidlersLeftImg.svg'
import rightImage from '../../assets/images/svg/buidlersRightImg.svg'
const OurBuidlers = () => {
  return (
    <div className="bg-papayaWhip relative" id="movement">
        <img className="absolute mix-blend-darken left-14 top-6 w-[177px] h-[177px] hidden lg:block" src={leftImage} alt="side img" />
    <img className="absolute mix-blend-darken right-24 top-12 xl:top-20 hidden lg:block w-[177px] h-[120px]" src={rightImage} alt="side img" />
      <div className="container max-w-[1201px] mx-auto px-3 pb-[26px] pt-12 md:pt-[68px]">
      <h2 className="text-saffron font-indieFlower font-normal leading-lh131 text-2xl text-center text_border_half_orange">Our Buidlers</h2>
      <h2 className="common_heading text_border_one mb-5 md:mb-[30px]">Community Driven Movement</h2>
      <img className="w-full" src={buidlersBG} alt="buildlers image" />
    </div>
    </div>
  );
};

export default OurBuidlers;
