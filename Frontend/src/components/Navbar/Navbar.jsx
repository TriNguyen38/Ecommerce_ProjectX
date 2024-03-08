import React from "react";

const Navbar = () => {
  return (
                                        // Navbar
    <div className="bg-red-600 w-full h-full">
      <nav className="p-2 flex justify-around text-white items-center">
                                        {/* Logo or NamePage */}
        <a href="">EcommerceProjectX</a>
                                        {/* Categories */}
        <a href="" className="flex bg-red-300 rounded-lg p-2 text-xs items-center">
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </div>
          <div>Categories</div>
        </a>
                                           {/* Location */}
        <a href="" className="flex text-xs">
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
                                          {/* Searching */}
        <div>
          <form className="flex items-center rounded-lg p-4" action="">
            <div className="flex bg-white rounded p-1">
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

              <div>
                <input
                  className="rounded-lg"
                  type="text"
                  placeholder="What are u looking for?"
                />
              </div>
            </div>
          </form>
        </div>
                                            {/* Calling */}
        <a href="" className="flex">
          <div>CallingIcon</div>
          <div>
            <p>Calling</p>
            <br />
            <strong className="text-sm">1800.1234</strong>
          </div>
        </a>
                                            {/* Store */}
        <a href="">Store</a>
                                            {/* Cart */}
        <a href="">Cart</a>
                                            {/* User */}
        <div>User</div>
      </nav>
    </div>
  );
};

export default Navbar;
