import React from "react";
import Navbar from "..//Navbar/Navbar";
import img1 from "..//..//imgs/img1.jpg";
import img2 from "..//..//imgs/img2.jpg";
import img3 from "..//..//imgs/img3.jpg";

const Content = () => {
  const groupImg = [img1, img2, img3];
  return (
    // Content Homepage
    <div className="px-32 py-2.5 flex flex-col w-full">
      {/* Top content */}
      <div className="flex justify-around w-full items-start">
        {/* Left */}
        <div className="flex flex-wrap text-xs">
          <Navbar />
        </div>
        {/* Middle */}
        <div className="flex flex-col items-center flex-wrap overflow-hidden ml-4 mr-4 border-2">
          <div className="  bg-slate-400 w-full flex flex-row overflow-hidden h-80">
            <img src={img1} alt="Phone" />
            <img src={img2} alt="Tablet" />
            <img src={img3} alt="Laptop" />
          </div>
          <div className="py-7">
              <a href="">infor</a>
          </div>
        </div>
        {/* Right */}
        <div className=" bg-green-300 h-[404px]">Banner</div>
      </div>

      {/* Middle content */}
      <div>Middle</div>
      {/* Bot content */}
    </div>
  );
};

export default Content;
