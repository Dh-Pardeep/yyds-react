import React from "react";
import buidlersBG from '../../assets/images/webp/builders-bg.webp'
import leftImage from '../../assets/images/svg/buidlersLeftImg.svg'
import rightImage from '../../assets/images/svg/buidlersRightImg.svg'
const OurBuidlers = () => {
  return (
    <div className="bg-papayaWhip relative">
        {/* <img className="absolute mix-blend-darken left-0 top-0" src={leftImage} alt="side img" />
    <img className="absolute mix-blend-darken right-0 top-0" src={rightImage} alt="side img" /> */}
      <div className="container max-w-[1201px] mx-auto px-3 pb-[26px] pt-12 md:pt-[68px]">
      <h2 className="text-saffron font-indieFlower font-normal leading-lh131 text-2xl text-center ">Our Buidlers</h2>
      <h2 className="common_heading text_border_one mb-5 md:mb-[30px]">Community Driven Movement</h2>
      <img className="w-full" src={buidlersBG} alt="buildlers image" />
    </div>
    </div>
  );
};

export default OurBuidlers;
