import React from "react";
import { useState } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { BsChevronCompactLeft } from "react-icons/bs";
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
import img1 from "..//..//imgs/img1.jpg";
import img2 from "..//..//imgs/img2.jpg";
import img3 from "..//..//imgs/img3.jpg";

const PhoneSlider = () => {
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
    setSliderItem(sliderItem - 1);
  };
  const nextSlider = () => {
    setSliderItem(sliderItem + 1);
  };

  return (
    <div className="mt-5">
      <div>
        <div className="flex justify-between mb-3">
          <a href="">
            <h2 className="text-[#444444] text-xl">Now Trending</h2>
          </a>
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
      <div className="mt-3 flex justify-between w-[200%]">
        <div className="flex flex-wrap">
          {groupItems.map((item, itemIndex) => (
            <div key={itemIndex}>
              <div
                style={{ transform: `translateX(-${sliderItem * 100}%` }}
                className="w-full h-auto duration-500"
              >
                <div className="flex flex-row">
                  <div className="mr-2 flex flex-col border rounded-md shadow-lg divide-solid z-20">
                    <div className="p-3 relative w-[223px]">
                      <div>
                        <img className="mt-2 w-[160px]" src={item} alt="" />
                      </div>
                      <div className="mb-1 text-[14px] h-16">
                        <h3>Samsung Galaxy S24 Ultra</h3>
                      </div>
                      <div className="mb-1 flex items-center">
                        <p className="text-[16px] text-[#d70018] font-semibold">
                          19.999.000đ
                        </p>
                        <p className="text-[14px] text-[#707070] font-bold line-through pl-1">
                          21.000.000đ
                        </p>
                      </div>
                      <div className="text-[11px] text-[#444444] flex flex-wrap items-baseline">
                        Additional discount up to
                        <span className="text-[#d70018] text-[14px] font-semibold pl-1">
                          250.000đ
                        </span>
                      </div>

                      <div className="mb-1">
                        <div className="w-full p-1 h-12 border-none rounded-md bg-[#f3f4f6]">
                          <span className="text-[12px] h-full line-clamp-2 text-[#444444]">
                            No conversion fee when installment payment via
                            credit card with 3-6 month tenure
                          </span>
                        </div>
                      </div>
                      <div className="ml-2 mb-2 absolute top-[-1px] left-[-10px] text-xs w-[90px] bg-red-600 rounded-tl-md">
                        <p className="text-white my-1 text-center">
                          Discount 15%
                        </p>
                      </div>
                    </div>
                    <div className="mb-1 flex justify-between p-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div key={star} className="text-yellow-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 fill-yellow-300"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                              />
                            </svg>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-[#777777]">Favorite</span>
                        <div>
                          <span className="text-red-600 cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 fill-red-600"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-2 mb-2 absolute top-[-1px] right-2 text-[10px] w-[80px] rounded-md border border-[#0c53b7] ">
                      <p className="text-[#0c53b7] my-1 text-center">
                        0% installment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center z-20">
          {sliderItem !== 0 && (
            <div>
              <button
                className="absolute bg-white/20 left-32  text-black text-2xl cursor-pointer shadow-lg divide-solid z-20 rounded-r-full"
                style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
                onClick={() => backSlider()}
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
                onClick={() => nextSlider()}
              >
                <BsChevronCompactRight size={35} className="my-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneSlider;
