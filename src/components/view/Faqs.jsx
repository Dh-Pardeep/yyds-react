import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import leftImage from '../../assets/images/svg/faqsLeftImge.svg'
import rightImage from '../../assets/images/svg/faqsRightImge.svg'
import headingBlueLine from '../../assets/images/svg/headingBlueLine.svg'
function Icon({ id, open }) {
  return (
    <svg
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-all duration-300 ease-in-out`}
      width="19"
      height="11"
      viewBox="0 0 19 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.7"
        d="M17.625 1.25L9.5 9.375L1.375 1.25"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const Faqs = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
   <div className="relative overflow-hidden" id="faqs">
    <img className="absolute mix-blend-darken left-0 top-6 xl:w-[272px] xl:h-[160px]  lg:w-[190px] lg:h-[110px] hidden lg:block" src={leftImage} alt="side img" />
    <img className="absolute mix-blend-darken -right-8 bottom-10 w-[230px] h-[180px] xl:w-[316px] xl:h-[260px] hidden lg:block" src={rightImage} alt="side img" />
     <div className="container max-w-[1164px] mx-auto px-3 py-12 sm:py-16 md:py-20 lg:py-28  xl:py-[138px] xl:pb-[189px]">
      <h2 className="common_heading text_border_one">How to Buy <span className="relative "> $YYDS<img className="absolute bottom-0 left-0 w-full" src={headingBlueLine} alt="blue line" /> </span></h2>
      <div className="max-w-[700px] xl:max-w-[854px] mx-auto mt-12 md:mt-[60px]">
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className="border border-black px-6 rounded-[10px] mb-5"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="font-indieFlower font-normal text-xl md:text-[24px] lg:text-3xl !leading-normal text_border_half text-black/70 border-none  "
          >
            1. Download and Install True Wallet
          </AccordionHeader>
          <AccordionBody className="pt-0 font-indieFlower  text-sm sm:text-base !leading-normal text_border_half">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            expedita molestiae quia, sunt natus ipsam eaque voluptatibus enim
            odit incidunt numquam laborum repudiandae ab temporibus et, vero sit
            officiis at?
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={<Icon id={2} open={open} />}
          className="border border-black px-6 rounded-[10px] mb-5"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="font-indieFlower font-normal text-xl md:text-[24px] lg:text-3xl !leading-normal text_border_half text-black/70 border-none "
          >
            2. Purchase some Ethereum
          </AccordionHeader>
          <AccordionBody className="pt-0 font-indieFlower  text-sm sm:text-base !leading-normal text_border_half">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            expedita molestiae quia, sunt natus ipsam eaque voluptatibus enim
            odit incidunt numquam laborum repudiandae ab temporibus et, vero sit
            officiis at?
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          icon={<Icon id={3} open={open} />}
          className="border border-black px-6 rounded-[10px] mb-5"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="font-indieFlower font-normal text-xl md:text-[24px] lg:text-3xl !leading-normal text_border_half text-black/70 border-none "
          >
            3. Click on DApps and Open Uniswap
          </AccordionHeader>
          <AccordionBody className="pt-0 font-indieFlower  text-sm sm:text-base !leading-normal text_border_half">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            expedita molestiae quia, sunt natus ipsam eaque voluptatibus enim
            odit incidunt numquam laborum repudiandae ab temporibus et, vero sit
            officiis at?
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 4}
          icon={<Icon id={4} open={open} />}
          className="border border-black px-6 rounded-[10px]"
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="font-indieFlower font-normal text-xl md:text-[24px] lg:text-3xl !leading-normal text_border_half text-black/70 border-none "
          >
            4. Swap Your Ethereum for $YYDS
          </AccordionHeader>
          <AccordionBody className="pt-0 font-indieFlower  text-sm sm:text-base !leading-normal text_border_half">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            expedita molestiae quia, sunt natus ipsam eaque voluptatibus enim
            odit incidunt numquam laborum repudiandae ab temporibus et, vero sit
            officiis at?
          </AccordionBody>
        </Accordion>
      </div>
    </div>
   </div>
  );
};

export default Faqs;
