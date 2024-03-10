import React from "react";
import { listSidebar } from "./listSidebar";
import { BsChevronRight } from "react-icons/bs";

const Navbar = () => {
  const items = listSidebar;
  return (
    <div>
      <div>
        <ul className="bg-white border-2 shadow-lg divide-solid z-20 text-black box-content w-1/6 flex flex-col p-2 rounded-lg text-xs">
        {items.map((item)=>(
          <li className="flex justify-between">
            <div className="flex items-center truncate flex-wrap">
              <i>
                { item.icon }
              </i>
              <a className="py-2 px-1" href="">
                <span>{ item.name1 }</span>
              </a>
              <a href="">
                <span>{ item.name2 }</span>
              </a>
            </div>
            <div className="flex , items-center">
              <i><BsChevronRight /></i>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
