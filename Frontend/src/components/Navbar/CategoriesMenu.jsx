import React from "react";
import Navbar from "./Navbar";

const CategoriesMenu = ({ items }) => {
    const PhoneBrand = ["A", "B", "C", "D", "E"];
    const PhonePriceRange = ["A", "B", "C", "D", "E"];
    const PopularPhone = ["A", "B", "C", "D", "E"];
    const TabletBrand = ["A", "B", "C", "D", "E"];
    const PopularTablet = ["A", "B", "C", "D", "E"];
    const Categories = [
      { title: "Phone Brand", item: PhoneBrand },
      { title: "Phone Price Range", item: PhonePriceRange },
      { title: "Popular Phone", item: PopularPhone },
      { title: "Tablet Brand", item: TabletBrand },
      { title: "Popular Tablet", item: PopularTablet },
    ];
  console.log(items);

  return (
    <div>
      <div className="flex flex-wrap p-2">
        {items.map((category,index) => (
          <div
            key={index}
            className="flex flex-col justify-between w-1/5 mb-10"
          >
            <div>
              <h2 className="text-[16px] text-black font-medium mb-3">
                {category.name1}
              </h2>
            </div>
{/* 
             {category.title.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-2">
                <a className="hover:text-red-500 cursor-pointer text-xs text-gray-500">
                  {item.item}
                </a>
              </div>
            ))}  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesMenu;
