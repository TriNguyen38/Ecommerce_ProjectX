import React from "react";
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

const ProductsHomepage = () => {
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
  if(groupItems.length > 0){

  }else{

  }
  return (
    <div>

    </div>
  );
};

export default ProductsHomepage;
