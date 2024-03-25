import React from "react";
import { useState } from "react";
import paymentDiscount1 from "..//..//imgs/PaymentDiscount/momo-1-3-2024.webp";
import paymentDiscount2 from "..//..//imgs/PaymentDiscount/uu-dai-thanh-toan-hsbc-0803-2024.webp";
import paymentDiscount3 from "..//..//imgs/PaymentDiscount/uu-dai-vib-05-03-2024 (2).webp";
import paymentDiscount4 from "..//..//imgs/PaymentDiscount/uu-dai-vppay-apple-080324 (2).webp";

const PaymentDiscount = () => {
  const groupItems = [
    paymentDiscount1,
    paymentDiscount2,
    paymentDiscount3,
    paymentDiscount4,
  ];
  return (
    <div className="mt-5">
      <div>
        <div className="flex justify-between mb-3">
          <a href="">
            <h2 className="text-[#444444] text-xl">Payment Discount</h2>
          </a>
        </div>

        <div className="mt-3 flex justify-between w-[200%]">
          <div className="flex">
            {groupItems.map((item, itemIndex) => (
              <div key={itemIndex}>
                <div className="w-full h-auto">
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
        </div>
      </div>
    </div>
  );
};

export default PaymentDiscount;
