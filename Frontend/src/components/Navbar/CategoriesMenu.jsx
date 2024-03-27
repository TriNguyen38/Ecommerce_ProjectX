import React from "react";

const CategoriesMenu = () => {
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
    { title: "Popular Tablet", item: PopularTablet },
    { title: "Popular Tablet", item: PopularTablet },
  ];
  return (
    <div>
      <div className="flex flex-wrap p-2">
        {Categories.map((category, index) => (
          <div key={index} className="flex flex-col justify-between w-1/5 mb-10">
            <div>
              <h2 className="text-[16px] text-black font-medium mb-3">{category.title}</h2>
            </div>
            {category.item.map((item, index) => (
              <div key={index} className="mb-2" >
                <a className="hover:text-red-500 cursor-pointer text-xs text-gray-500">{item}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesMenu;
