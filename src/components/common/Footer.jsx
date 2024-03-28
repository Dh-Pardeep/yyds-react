import React from "react";
import footerLogo from "../../assets/images/svg/footer_logo.svg";
import { Link } from "react-router-dom";
import { footerLinks } from "../../utils/Helper";
const Footer = () => {
  return (
    <div className="bg-darkCharcoal">
      <div className="container max-w-[1164px] mx-auto px-3 py-9 ">
        <div className="flex flex-col sm:flex-row  items-center justify-between">
          <div className="flex items-end gap-2">
            <img src={footerLogo} alt="footer logo" />
            <p className="hidden lg:block font-poppins text-sm sm:text-base !leading-normal font-normal text-lightWhite opacity-80 max-w-[256px]">
              $YYDS is a memecoin with no intrinsic value or expectation of
              financial return.
            </p>
          </div>
          <div className="flex items-center gap-6 sm:gap-[42px] my-6 sm:my-0">
            {footerLinks.map((obj, index)=>{
              return(
                <div key={index}>
                  <Link className="font-poppins font-semibold !leading-normal text-sm sm:text-base text-lightWhite opacity-80" to={obj.url}>{obj.link}</Link>
                </div>
              )
            })}
          </div>
        </div>
        <p className="font-poppins text-sm sm:text-base !leading-normal text-center sm:text-start font-normal text-lightWhite opacity-80 lg:hidden sm:mt-6 md:mt-8">
              $YYDS is a memecoin with no intrinsic value or expectation of
              financial return.
            </p>
      </div>
    </div>
  );
};

export default Footer;
