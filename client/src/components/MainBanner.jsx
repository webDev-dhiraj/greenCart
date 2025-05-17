import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function MainBanner() {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full hidden"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-6 md:items-start md:justify-center md:px-12 lg:px-24 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15">
          Freshness You Trust, Saving You will Love!
        </h1>

        <div className="flex items-center mt-6 font-medium">
          <Link
            to={"/products"}
            className="goup flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer"
          >
            Shop now
            <img
              className="md:hidden transition group-focus:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>
          <Link
            to={"/products"}
            className="group hidden md:flex items-center gap-2 px-7 py-3 cursor-pointer"
          >
            Explore deals
            <img
              className=" transition group-focus:translate-x-1"
              src={assets.black_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
