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
import phone1 from "..//..//imgs/itemsContent/iphone-13_2_.webp";
import phone2 from "..//..//imgs/itemsContent/iphone-14-pro_2__5.webp";
import phone3 from "..//..//imgs/itemsContent/iphone-15-plus_1__1.webp";
import phone4 from "..//..//imgs/itemsContent/iphone-15-pro-max_3.webp";
import phone5 from "..//..//imgs/itemsContent/oppo-reno-11-f-xanh-2.webp";
import phone6 from "..//..//imgs/itemsContent/samsung-galaxy-s23-ultra.webp";
import phone7 from "..//..//imgs/itemsContent/samsung-galaxy-z-flip-5-256gb_1_5.webp";
import phone8 from "..//..//imgs/itemsContent/ss-s24-ultra-xam-222.webp";
import phone9 from "..//..//imgs/itemsContent/xiaomi-redmi-note-13_1__1_1.webp";
import phone10 from "..//..//imgs/itemsContent/xiaomi-redmi-note-13-pro-4g_13__1.webp";
import ProductsHomepage from "./ProductsHomepage";
import Slider from "../Slider/Slider";

const Content = () => {
  const groupBanner = [banner1, banner2, banner3];
  const groupImgs = [
    { img: img1, desc: "Iphone" },
    { img: img2, desc: "Samsung" },
    { img: img3, desc: "Google" },
  ];
  const groupItems = [
    phone1,
    phone2,
    phone3,
    phone4,
    phone5,
    phone6,
    phone7,
    phone8,
    phone9,
    phone10,
  ];
  const [sliderItem, setSliderItem] = useState(0);
  const backSlider = () => {
    if (sliderItem === 0) {
      setSliderItem(groupItems.length - 6);
    } else {
      setSliderItem(sliderItem - 1);
    }
  };
  const nextSlider = () => {
    if (sliderItem === groupItems.length - 5) {
      setSliderItem(0);
      console.log(sliderItem + 1);
    } else {
      setSliderItem(sliderItem + 1);
    }
  };

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
        <div className="mt-5">
          <div>
            <div className="flex justify-between mb-3">
              <a href="">Now Trending</a>
              <a
                className="rounded-lg border-2 px-2 py-1 bg-gray-200 hover:bg-gray-300"
                href=""
              >
                All
              </a>
            </div>
            <div>
              <a className="flex justify-end cursor-pointer" href="">
                {groupImgs.map((desc, index) => (
                  <div
                    key={index}
                    className="ml-3 border-2 items-center rounded-lg px-2 py-1 bg-gray-200 hover:bg-gray-300"
                  >
                    {desc.desc}
                  </div>
                ))}
              </a>
            </div>
          </div>
          <div className="mt-3 flex justify-between w-[400%]">
            <div className="flex flex-wrap">
              {groupItems.map((item, index) => (
                <div key={index}>
                  <div
                    style={{ transform: `translateX(-${sliderItem * 100}%` }}
                    className="w-full h-auto duration-500"
                  >
                    <div className="flex flex-row">
                      <div className="mr-2 flex flex-col border-2 rounded-md shadow-lg divide-solid z-20">
                        <div className="p-3 relative w-[223px]">
                          <div>
                            <img className="mt-2 w-[160px]" src={item} alt="" />
                          </div>
                          <div className="mb-1">
                            <h3>Name</h3>
                          </div>
                          <div className="mb-1">
                            <span>Price</span>
                          </div>
                          <div>Discount percent</div>
                          <div className="mb-1">Member</div>
                          <div
                            className="ml-2 mb-2 absolute top-[-1px] left-[-10px] text-xs w-[90px] bg-red-600 rounded-tl-lg"
                            
                          >
                            <p className="text-white my-1 text-center">
                              Discount 15%
                            </p>
                          </div>
                        </div>
                        <div className="mb-1">Vote</div>
                        <div className="ml-2 mb-2 absolute top-[-1px] right-2 text-[10px] w-[50px] rounded border-2">
                          <p className="text-blue-500 my-1 text-center">0% installment</p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center z-20">
                {sliderItem !== 0 && (
                  <div>
                    <button
                      className="absolute bg-white/20 left-32  text-black text-2xl cursor-pointer shadow-lg divide-solid z-20 rounded-r-full"
                      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
                      onClick={backSlider}
                    >
                      <BsChevronCompactLeft size={35} className="my-4" />
                    </button>
                  </div>
                )}
                {sliderItem !== groupItems.length - 5 && (
                  //  groupItems.length - 5 vì giao diện đang hiển thị trên cùng 1 hàng là 5 items rồi
                  //  thì khi click Next hình tiếp theo sẽ là hình thứ 6 và state sliderItem sẽ cập nhật từ 0 + 1
                  <div>
                    <button
                      className="absolute bg-white/20 right-32  text-black text-2xl cursor-pointer shadow-lg divide-solid z-20 rounded-l-full"
                      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
                      onClick={nextSlider}
                    >
                      <BsChevronCompactRight size={35} className="my-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Bot content */}
      </div>
    </div>
  );
};

export default Content;
