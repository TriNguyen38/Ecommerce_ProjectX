import React from "react";
import { useState } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { BsChevronCompactLeft } from "react-icons/bs";
import img1 from "..//..//imgs/img1.jpg";
import img2 from "..//..//imgs/img2.jpg";
import img3 from "..//..//imgs/img3.jpg";

const Slider = () => {
  const groupImgs = [
    { img: img1, desc: "Iphone" },
    { img: img2, desc: "Samsung" },
    { img: img3, desc: "Google" },
  ];

  const [slider, setSlider] = useState(0);
  const backSlide = () => {
    if (slider === 0) {
      setSlider(groupImgs.length - 1);
    } else {
      setSlider(slider - 1);
    }
  };
  const nextSlide = () => {
    if (slider === groupImgs.length - 1) {
      setSlider(0);
    } else {
      setSlider(slider + 1);
    }
  };
  const descClick = (descIndex) => {
    setSlider(descIndex);
  };

  return (
    <div className="flex flex-col items-center flex-wrap overflow-hidden ml-2 mr-2 w-3/5 border-2 rounded-lg shadow-lg divide-solid z-20">
      <div className="  bg-slate-400 w-full flex flex-row overflow-hidden h-80 items-center group relative">
        {groupImgs.map((imgItem, index) => (
          <img
            style={{ transform: `translateX(-${slider * 100}%` }}
            key={index}
            src={imgItem.img}
            alt="Phone"
            className="duration-500"
          />  
        ))}
        <div className="flex items-center">
          <div>
            <button
              className="hidden group-hover:block absolute bg-black/40 left-0  text-white text-2xl cursor-pointer rounded-r-full shadow-lg divide-solid z-20 "
             
              onClick={backSlide}
            >
              <BsChevronCompactLeft size={35} className="my-4" />
            </button>
          </div>
          <div>
            <button
              className="hidden group-hover:block absolute bg-black/40 right-0  text-white text-2xl cursor-pointer rounded-l-full shadow-lg divide-solid z-20 "
              onClick={nextSlide}
            >
              <BsChevronCompactRight size={35} className="my-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="h-20 w-full">
        <div className="flex justify-around h-full" href="">
          {groupImgs.map((descItem, descIndex) => (
            <div
              key={descIndex}
              className="cursor-pointer h-full flex items-center justify-center w-full hover:bg-slate-200"
              onClick={() => descClick(descIndex)}
            >
              {descItem.desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
