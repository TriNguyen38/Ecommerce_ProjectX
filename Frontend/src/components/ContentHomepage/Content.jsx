import React from "react";
import { useState } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { BsChevronCompactLeft } from "react-icons/bs";
import Navbar from "..//Navbar/Navbar";
import img1 from "..//..//imgs/img1.jpg";
import img2 from "..//..//imgs/img2.jpg";
import img3 from "..//..//imgs/img3.jpg";
import banner1 from "..//..//imgs/banner1.webp";
import banner2 from "..//..//imgs/banner2.webp";
import banner3 from "..//..//imgs/banner3.webp";

const Content = () => {
  const groupBanner = [banner1, banner2, banner3];
  const groupImg = [img1, img2, img3];
  const groupImgs = [
    { img:  img1 , desc: "Iphone" },
    { img:  img2 , desc: "Samsung" },
    { img:  img3 , desc: "Google" },
  ];

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
  const descClick = (descIndex) => {
    setSlider(descIndex);
  }
  const clickBtn=()=>{
    console.log(1)
  }


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
          <div className="  bg-slate-400 w-full flex flex-row overflow-hidden h-80 items-center group relative">
            {groupImgs.map((imgItem, index) => (
              <img
                style={{ transform: `translateX(-${slider * 100}%` }}
                key={index}
                src={imgItem.img}
                alt="Phone"
                className="duration-700"
              />
            ))}

            <div className="flex items-center">
              <div>
                <button
                  className=" hidden group-hover:block absolute bg-black/20 left-2  text-white text-2xl cursor-pointer rounded-full"
                  onClick={backSlide}
                >
                  <BsChevronCompactLeft size={30} />
                </button>
              </div>
              <div>
                <button
                  className=" hidden group-hover:block absolute bg-black/20 right-2  text-white text-2xl cursor-pointer rounded-full"
                  onClick={nextSlide}
                >
                  <BsChevronCompactRight size={30} />
                </button>
              </div>
            </div>
          </div>

          <div className="h-20 w-full">
            <div className="flex justify-around h-full" href="">
              {groupImgs.map((descItem,descIndex)=>(
              <div key={descIndex} className="cursor-pointer h-full flex items-center justify-center w-full hover:bg-slate-300" onClick={()=>descClick(descIndex)}>
                {descItem.desc}
              </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="h-[404px] flex flex-col w-1/4">
          {groupBanner.map((banner, index) => (
            <a className="h-full" key={index} href="">
              <img
                className="h-full w-full pb-1 rounded-lg"
                src={banner}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>

      {/* Middle content */}
      <div  onClick={()=>clickBtn()}>
        <button>Click</button>
      </div>
      {/* Bot content */}
    </div>
  );
};

export default Content;
