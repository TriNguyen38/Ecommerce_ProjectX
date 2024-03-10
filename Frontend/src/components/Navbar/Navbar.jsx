import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <ul className="bg-white border-2 shadow-lg divide-solid z-20 text-black box-content w-1/6 flex flex-col p-2 rounded-lg">
          <li className="flex justify-between">
            <div className="flex items-center">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </i>
              <a className="p-1" href="">
                <span>Phone,</span>
              </a>
              <a href="">
                <span>Tablet</span>
              </a>
            </div>
            <div>
              <i>icon</i>
            </div>
          </li>
          <li>bcd</li>
          <li>efg</li>
          <li>hij</li>
          <li>klm</li>
          <li>nop</li>
          <li>qrs</li>
          <li>tuv</li>
          <li>wxy</li>
          <li>zab</li>
          <li>cde</li>
          <li>fge</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
