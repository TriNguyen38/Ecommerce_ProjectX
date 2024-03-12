import React from "react";
import { useState } from "react";
import Navbar from "..//Navbar/Navbar";
import img1 from "..//..//imgs/img1.jpg";
import img2 from "..//..//imgs/img2.jpg";
import img3 from "..//..//imgs/img3.jpg";

const Content = () => {
  const groupImg = [img1, img2, img3];
  const [slider, setSlider] = useState(0);
  const backSlide = () => {
    if (slider === 0) {
      setSlider(groupImg.length - 1);
    } else {
      setSlider(slider - 1);
    }
  };
  const nextSlide = () => {
    if (slider === groupImg.length - 1) {
      setSlider(0);
    } else {
      setSlider(slider + 1);
    }
  };

  return (
    // Content Homepage
    <div className="px-32 py-2.5 flex flex-col w-full">
      {/* Top content */}
      <div className="flex justify-evenly w-full items-start">
        {/* Left */}
        <div className="flex text-xs text-wrap">
          <Navbar />
        </div>
        {/* Middle */}
        <div className="flex flex-col items-center flex-wrap overflow-hidden ml-2 mr-2 w-3/5 border-2 rounded-lg">
          <div className="  bg-slate-400 w-full flex flex-row overflow-hidden h-80 items-center">
            {groupImg.map((imgItem, index) => (
              <img
                style={{ transform: `translateX(-${slider * 100}%` }}
                key={index}
                src={imgItem}
                alt="Phone"
                className="duration-700"
              />
            ))}

            <div className="flex">
              <button
                className="absolute left-96 border-2 bg-emerald-500"
                onClick={backSlide}
              >
                LEFT
              </button>
              <button
                className="absolute right-96 border-2 bg-emerald-500"
                onClick={nextSlide}
              >
                RIGHT
              </button>
            </div>
          </div>

          <div className="py-7 w-full">
            <a className="flex justify-around" href="">
              <div>Phone</div>
              <div>Tablet</div>
              <div>Laptop</div>
              <div>PC</div>
              <div>SmartHome</div>
            </a>
          </div>
        </div>
        {/* Right */}
        <div className=" bg-green-300 h-[404px] w-52 rounded-lg flex items-center justify-center">Banner</div>
      </div>

      {/* Middle content */}
      <div>Middle</div>
      {/* Bot content */}
    </div>
  );
};

export default Content;
