import React from "react";
import { useState } from "react";
import { listSidebar } from "./listSidebar";
import { BsChevronRight } from "react-icons/bs";
import CategoriesMenu from "./CategoriesMenu";

const Navbar = () => {
  const items = listSidebar;


  return (
    <div className="flex relative group">
      <div className="bg-white border-2 shadow-lg divide-solid z-20 text-black box-content flex flex-col p-2 rounded-lg w-full">
        <div>
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center cursor-pointer"
              >
                <div className="flex items-center truncate">
                  <i>{item.icon}</i>
                  <a className="py-2 px-1" href="">
                    <span className="hover:text-red-500">{item.name1}</span>
                  </a>
                  <a href="">
                    <span className="hover:text-red-500">{item.name2}</span>
                  </a>
                </div>
                <div className="flex,items-center">
                  <i>
                    <BsChevronRight />
                  </i>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[940px] hidden group-hover:block h-full absolute z-30 left-[210px] box-content border-2 shadow-lg divide-solid bg-white rounded-lg p-2">
        <CategoriesMenu items = { items } />
      </div>
    </div>
  );
};

export default Navbar;
