import React from "react";
import foundationImage from "../../assets/images/svg/foundation.svg";
import buildingImage from "../../assets/images/svg/building.svg";
import creativityImage from "../../assets/images/svg/creativity.svg";
const Roadmap = () => {
  return (
    <div className="container max-w-[1164px] mx-auto px-3 py-12 sm:py-16 md:py-20 lg:pt-28  xl:py-[134px] lg:pb-[95px]">
      <h2 className="text-saffron font-indieFlower font-normal leading-lh131 text-2xl text-center text_border_half_orange">
        Roadmap
      </h2>
      <h2 className="common_heading text_border_one mb-12 lg:mb-[58px]">
        Pathway to Progress
      </h2>
      <div className="relative">
        <div className="bg-black w-1 h-full top-0 absolute left-6 sm:left-1/2 sm:-translate-x-1/2"></div>
        <div className="flex  sm:items-center flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-1/2 flex items-center flex-row-reverse sm:flex-row justify-between ps-16 sm:ps-0 sm:pe-16 lg:pe-[92px]">
            <img
              className="mix-blend-darken w-[110px] md:w-[135px] lg:w-[190px] xl:w-[207px] "
              src={foundationImage}
              alt="foundation image"
            />
            <div className="border border-black rounded-[10px] me-5 sm:me-0 sm:ms-5  relative max-w-[140px] sm:max-w-[187px] w-full px-2 lg:px-12   py-[13px] h-[50px] md:h-[70px] lg:h-[89px] flex items-center justify-center  before:content-[''] before:bg-black before:absolute before:top-1/2 before:-translate-y-1/2 before:lg:!right-[-94px] before:left-[-40px] before:sm:!right-[-75px] before:lg:w-[94px] before:lg:h-[4px] before:sm:w-[75px] before:w-[40px] before:h-[4px] after:content-[''] after:rounded-full after:bg-babypowder after:absolute after:top-1/2 after:-translate-y-1/2  after:left-[-52px] after:sm:!right-[-78px] after:w-[26px] after:h-[26px] after:border-[3px] after:border-black left_unset after:lg:!right-[-105px]">
              <h2 className="text_border_half_orange font-indieFlower leading-lh131 text-3xl md:text-4xl lg:text-5xl text-saffron ">
                2023
              </h2>
            </div>
          </div>
          <div className="w-full sm:w-1/2 ps-16 sm:ps-10 pt-6 sm:pt-0">
            <div className=" w-full bg-babypowder p-5 border border-black rounded-[10px]  ">
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
        <div className="flex sm:items-center flex-col-reverse sm:flex-row justify-between py-10">
          <div className="w-full sm:w-1/2 ps-16 sm:ps-0 sm:pe-10 pt-6 sm:pt-0">
            <div className=" w-full bg-babypowder p-5 border border-black rounded-[10px]  ">
              <h2 className="text-lightBlack font-indieFlower font-normal leading-lh131 text-xl md:text-2xl text_border_half mb-2">
                Building Momentum
              </h2>
              <p className="font-poppins text-sm sm:text-base font-normal leading-lh138 text-lightBlack opacity-60">
                During the Building Momentum phase, our vision starts to take
                shape. Our community of skilled artist, meme creators and
                developers crafting a unique culture fostering creativity and
                innovation based on the principle of FAFO (fuck around and find
                out) all driven by the DAO members and community contributions
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex items-center justify-between ps-16 lg:ps-[92px]">
            <div className="border border-black rounded-[10px] me-5 relative max-w-[140px] sm:max-w-[187px] w-full px-2 lg:px-12 py-[13px] h-[50px] md:h-[70px] lg:h-[89px] flex items-center justify-center  before:content-[''] before:bg-black before:absolute before:top-1/2 before:-translate-y-1/2 before:lg:left-[-94px] before:left-[-40px] before:sm:left-[-75px] before:lg:w-[94px] before:lg:h-[4px] before:w-[40px] sm:before:w-[75px] before:h-[4px] after:content-[''] after:rounded-full after:bg-babypowder after:absolute after:top-1/2 after:-translate-y-1/2 after:lg:left-[-105px] after:left-[-52px] after:sm:left-[-78px] after:w-[26px] after:h-[26px] after:border-[3px] after:border-black after:z-10">
              <h2 className="text_border_half_orange font-indieFlower leading-lh131 text-3xl md:text-4xl lg:text-5xl text-saffron ">
                2024
              </h2>
            </div>
            <img
              className="mix-blend-darken w-[110px] md:w-[135px] lg:w-[190px] xl:w-[207px] "
              src={buildingImage}
              alt="building image"
            />
          </div>
        </div>
        <div className="flex sm:items-center flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-1/2 flex items-center flex-row-reverse sm:flex-row justify-between ps-16 sm:ps-0 sm:pe-16 lg:pe-[92px]">
            <img
              className="mix-blend-darken w-[110px] md:w-[135px] lg:w-[190px] xl:w-[207px] "
              src={creativityImage}
              alt="creativity image"
            />
            <div className="border border-black rounded-[10px] me-5 sm:me-0 sm:ms-5  relative max-w-[140px] sm:max-w-[187px] w-full px-2 lg:px-12   py-[13px] h-[50px] md:h-[70px] lg:h-[89px] flex items-center justify-center  before:content-[''] before:bg-black before:absolute before:top-1/2 before:-translate-y-1/2 before:lg:!right-[-94px] before:left-[-40px] before:sm:!right-[-75px] before:lg:w-[94px] before:lg:h-[4px] before:sm:w-[75px] before:w-[40px] before:h-[4px] after:content-[''] after:rounded-full after:bg-babypowder after:absolute after:top-1/2 after:-translate-y-1/2  after:left-[-52px] after:sm:!right-[-78px] after:w-[26px] after:h-[26px] after:border-[3px] after:border-black left_unset after:lg:!right-[-105px]">
              <h2 className="text_border_half_orange font-indieFlower leading-lh131 text-3xl md:text-4xl lg:text-5xl text-saffron ">
                2025
              </h2>
            </div>
          </div>
          <div className="w-full sm:w-1/2 ps-14 sm:ps-10 pt-6 sm:pt-0">
            <div className=" w-full bg-babypowder p-5 border border-black rounded-[10px]">
              <h2 className="text-lightBlack font-indieFlower font-normal leading-lh131 text-xl md:text-2xl text_border_half mb-2">
                Unleashing Creativity
              </h2>
              <p className="font-poppins text-sm sm:text-base font-normal leading-lh138 text-lightBlack opacity-60">
                Unleashing Creativity is our focus as the culture expands to all
                corners of web3 supported by a robust Buidler DAO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
