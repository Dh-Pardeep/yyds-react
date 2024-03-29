import React from "react";
import yydsCircle from "../../assets/images/svg/yydscircle.svg";
import leftTopImage from "../../assets/images/svg/tokenlefttop.svg";
import leftBottomImage from "../../assets/images/svg/tokenleftbottom.svg";
import rightImage from "../../assets/images/svg/tokenrightimg.svg";
const Tokenomics = () => {
  return (
    <div className="bg-papayaWhip relative">
      {/* <img
        className="absolute mix-blend-darken left-0 top-0"
        src={leftTopImage}
        alt="side img"
      />
      <img
        className="absolute mix-blend-darken left-0 bottom-0"
        src={leftBottomImage}
        alt="side img"
      />
      <img
        className="absolute mix-blend-darken right-0 top-0"
        src={rightImage}
        alt="side img"
      /> */}
      <div className="container max-w-[1164px] mx-auto px-3 py-12 sm:py-16 md:py-20 lg:py-[94px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-5/12">
            <img
              src={yydsCircle}
              className=" mx-auto lg:ms-0"
              alt="circle image"
            />
          </div>
          <div className="w-full lg:w-7/12 lg:max-w-[600px] mt-12 ">
            <h2 className="text-saffron font-indieFlower font-normal text-start leading-lh131 text-2xl text_border_half_orange">
              Tokenomics
            </h2>
            <h2 className="common_heading text_border_one !text-start mb-[30px]">
              Token Metrics
            </h2>
            <div className="flex gap-4 ">
              <div className="bg-pastedOrange w-[41px] h-[30px] rounded "></div>
              <p className="font-normal font-indieFlower text-xl md:text-2xl leading-lh131 text-lightBlack">
                10% CEX Liquidity
              </p>
            </div>
            <div className="flex gap-4 mt-[14px]">
              <div className="bg-racingRed w-[41px] h-[30px] rounded "></div>
              <p className="font-normal font-indieFlower text-xl md:text-2xl leading-lh131 text-lightBlack">
                10% CEX Liquidity
              </p>
            </div>
            <p className="font-poppins font-normal text-sm sm:text-base leading-lh138 text-lightBlack opacity-60 py-5">
              Welcome to the heart of our Meme Coin ecosystem, where creativity
              meets innovation. Our tokenomics is designed to bring a wave of
              excitement to the world of cryptocurrency, reshaping the landscape
              of how memes are not only shared, but valued.
            </p>
            <div className="border border-black rounded-[14px] px-[22px] py-[17px] bg-pastedOrange/35">
              <h2 className="font-poppins font-semibold text-lg sm:text-xl leading-lh138 text-lightBlack">
                Ecosystem
              </h2>
              <p className="font-poppins font-medium text-base sm:text-lg leading-lh138 text-lightBlack py-[10px]">
                Tax Buy 1%/Sell 1%, Contract Renounced / LP Locked
              </p>
              <p className="font-poppins font-normal text-sm sm:text-base leading-lh138 text-lightBlack">
                All taxes deposited in community directed DAO where anyone can
                submit proposals and DAO token holders can vote on allocations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
