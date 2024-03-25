import React from "react";
import { useState } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { BsChevronCompactLeft } from "react-icons/bs";
import voucherBanner1 from "..//..//imgs/VoucherBanner/dongho-hssv-sliding-2024.webp";
import voucherBanner2 from "..//..//imgs/VoucherBanner/hssv-tong-2024.webp";
import voucherBanner3 from "..//..//imgs/VoucherBanner/laptop-hssv-sliding-2024.webp";
import voucherBanner4 from "..//..//imgs/VoucherBanner/realme-sliding-hssv.webp";
import voucherBanner5 from "..//..//imgs/VoucherBanner/ss-hssv-sliding-2024.webp";
import voucherBanner6 from "..//..//imgs/VoucherBanner/tcl-hssv-sliding-2024.webp";
import voucherBanner7 from "..//..//imgs/VoucherBanner/vivo-hssv-sliding-2024.webp";

const VoucherBanner = () => {
  const groupItems = [
    voucherBanner1,
    voucherBanner2,
    voucherBanner3,
    voucherBanner4,
    voucherBanner5,
    voucherBanner6,
    voucherBanner7,
  ];

  const [sliderItem, setSliderItem] = useState(0);
  const backSlider = () => {
    setSliderItem(sliderItem - 1);
  };
  const nextSlider = () => {
    setSliderItem(sliderItem + 1);
    console.log(groupItems.length);
  };

  return (
    <div className="mt-5">
      <div>
        <div className="flex justify-between mb-3">
          <a href="">
            <h2 className="text-[#444444] text-xl">Student Discount</h2>
          </a>
        </div>
      </div>
      <div className="mt-3 flex justify-between w-[200%]">
        <div className="flex">
          {groupItems.map((item, itemIndex) => (
            <div key={itemIndex}>
              <div
                style={{ transform: `translateX(-${sliderItem * 100}%` }}
                className="w-full h-auto duration-500"
              >
                <div className="mr-1 flex flex-col">
                  <div className="p-1">
                    <div>
                      <img
                        className="w-[284px] rounded-md shadow-lg divide-solid z-20"
                        src={item}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center z-30">
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
          {sliderItem !== groupItems.length - 4 && (
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

export default VoucherBanner;
