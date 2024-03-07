import React from "react";

const Navbar = () => {
  return (
    <div className="bg-red-600 w-full h-full">
      <nav className="p-2 flex justify-around text-white items-center">
        <a href="">Logo</a>
        <a href="" className="flex">
          <div>icon</div>
          <div>Categories</div>
        </a>
        <a href="" className="flex">
          <div>
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <div>Location</div>
        </a>
        <div>
          <form className="flex bg-white rounded" action="">
            <div>
              <button>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#374151"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
            <div>
              <input type="text" placeholder="What are u looking for?" />
            </div>
          </form>
        </div>
        <a href="" className="flex">
          <div>CallingIcon</div>
          <div>
            <p>Calling</p>
            <br />
            <strong className="text-sm">1800.1234</strong>
          </div>
        </a>
        <a href="">Store</a>
        <a href="">Cart</a>
        <div>User</div>
      </nav>
    </div>
  );
};

export default Navbar;
