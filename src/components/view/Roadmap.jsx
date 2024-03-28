import React from "react";
import foundationImage from "../../assets/images/svg/foundation.svg";
const Roadmap = () => {
  return (
    <div className="container max-w-[1164px] mx-auto px-3 py-12 sm:py-16 md:py-20 lg:pt-28  xl:py-[134px] lg:pb-[95px]">
      <h2 className="text-saffron font-indieFlower font-normal leading-lh131 text-2xl text-center text_border_half_orange">
        Roadmap
      </h2>
      <h2 className="common_heading text_border_one mb-12 lg:mb-[58px]">
        Pathway to Progress
      </h2>
      <div className="relative h-[675px]">
        <div className="bg-black w-1 h-full top-0 absolute left-1/2 -translate-x-1/2"></div>
        <div className="flex items-center justify-between">
         <div className="w-1/2">
         <img
            className="mix-blend-darken"
            src={foundationImage}
            alt="foundation image"
          />
         </div>
         <div className="w-1/2 ps-10">
         <div className=" w-full bg-babypowder p-5 border border-black rounded-[10px] relative after:content-[''] after:rounded-full after:bg-babypowder after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[-54px] after:w-[26px] after:h-[26px] after:border-[3px] after:border-black">
            <h2 className="text-lightBlack font-indieFlower font-normal leading-lh131 text-xl md:text-2xl text_border_half mb-2">
              Foundation
            </h2>
            <p className="font-poppins text-sm sm:text-base font-normal leading-lh138 text-lightBlack opacity-60">
              In the Foundation phase, we're laying the groundwork for Memes
              Coin's journey. Our team is hard at work, refining the concept
              that merges the worlds of memes and cryptocurrency.
            </p>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
