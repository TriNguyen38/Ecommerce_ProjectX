import React from "react";
import imgCategory1 from "..//..//imgs/categoriesContent/cate-content-1.webp";
import imgCategory2 from "..//..//imgs/categoriesContent/cate-content-2.webp";
import imgCategory3 from "..//..//imgs/categoriesContent/cate-content-3.webp";
import imgCategory4 from "..//..//imgs/categoriesContent/cate-content-4.webp";
import imgCategory5 from "..//..//imgs/categoriesContent/cate-content-5.png";
import imgCategory6 from "..//..//imgs/categoriesContent/cate-content-6.png";
import imgCategory7 from "..//..//imgs/categoriesContent/cate-content-7.png";
import imgCategory8 from "..//..//imgs/categoriesContent/cate-content-8.png";
import imgCategory9 from "..//..//imgs/categoriesContent/cate-content-9.png";
import imgCategory10 from "..//..//imgs/categoriesContent/cate-content-10.png";
import imgCategory11 from "..//..//imgs/categoriesContent/cate-content-11.webp";
import imgCategory12 from "..//..//imgs/categoriesContent/cate-content-12.webp";
import imgCategory13 from "..//..//imgs/categoriesContent/cate-content-13.webp";

const CategoriesContent = () => {
  const categoriesContent = [
    {
      title: "Phone",
      img: imgCategory1,
    },
    {
      title: "Laptop",
      img: imgCategory2,
    },
    {
      title: "LoudSpeaker",
      img: imgCategory3,
    },
    {
      title: "Macbook",
      img: imgCategory4,
    },
    {
      title: "AirPod",
      img: imgCategory5,
    },
    {
      title: "SmartWatch",
      img: imgCategory6,
    },
    {
      title: "SmartHome",
      img: imgCategory7,
    },
    {
      title: "Accessories",
      img: imgCategory8,
    },
    {
      title: "Screen",
      img: imgCategory9,
    },
    {
      title: "TVs",
      img: imgCategory10,
    },
    {
      title: "Cable",
      img: imgCategory11,
    },
    {
      title: "Battery",
      img: imgCategory12,
    },
    {
      title: "Tablet",
      img: imgCategory13,
    },
  ];
  return (
    <div className="mt-3">
      <div>
        <div className="title">Laptop</div>
        <div className="flex">
          {categoriesContent.map((item, index) => (
            <div key={index}>
              <a
                href=""
                className=" bg-center bg-cover"
                style={{
                  backgroundImage: `url(${item.img})`,
                  width:"200px",
                  height:"200px"
                }}
              >
                <span>{item.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesContent;
