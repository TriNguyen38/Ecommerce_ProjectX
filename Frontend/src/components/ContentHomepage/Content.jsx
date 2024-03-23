import React from "react";
import { useState } from "react";
import Navbar from "..//Navbar/Navbar";
import banner1 from "..//..//imgs/banner1.webp";
import banner2 from "..//..//imgs/banner2.webp";
import banner3 from "..//..//imgs/banner3.webp";

import PhoneSlider from "./PhoneSlider";
import Slider from "../Slider/Slider";
import LaptopSlider from "./LaptopSlider";
import CategoriesContent from "./CategoriesContent";

const Content = () => {
  const groupBanner = [banner1, banner2, banner3];

  return (
    // Content Homepage
    <div className="mx-32 my-2.5 px-2 py-1 overflow-hidden">
      <div className=" flex flex-col w-full">
        {/* Top content */}
        <div className="flex justify-evenly w-full items-start">
          {/* Left */}
          <div className="flex text-xs text-wrap">
            <Navbar />
          </div>
          {/* Middle */}
          <Slider />
          {/* Right */}
          <div className="h-[404px] flex flex-col w-1/4">
            {groupBanner.map((banner, index) => (
              <a className="h-full" key={index} href="">
                <img
                  className="h-full w-full pb-1 rounded-lg shadow-lg divide-solid z-20"
                  src={banner}
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>
        {/* Middle content */}
        <PhoneSlider />
        <LaptopSlider/>
        {/* Bot content */}
      </div>
      <CategoriesContent/>
    </div>
  );
};

export default Content;
