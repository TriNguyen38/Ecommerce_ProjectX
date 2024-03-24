import React from "react";
import { Phone, Laptop, Tablet } from "./data";

const CategoriesContent = () => {
  const categoriesContent = [
    { title: "Phone", items: Phone },
    { title: "Tablet", items: Tablet },
    { title: "Laptop", items: Laptop },
  ];
  console.log(categoriesContent[0].items);
  return (
    <div className="mt-5">
      {categoriesContent.map((category, index) => (
        <div key={index}>
          <div className="title">
            <a href="">
              <h2 className="text-[#444444] text-xl">{category.title}</h2>
            </a>
          </div>
          <div className="flex flex-wrap">
            {category.items.map((item, index) => (
              <div key={index}>
                <a
                  href=""
                  className="block rounded-lg bg- bg-center bg-cover bg-no-repeat w-[100px] h-[100px] m-3 bg-[#D54044] shadow-lg divide-solid z-20 "
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                >
                  <span className="text-white mt-1 text-[14px] px-1">
                    {item.title}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesContent;
