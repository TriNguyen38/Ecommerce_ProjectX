import React from "react";
import {
  FaApplePay,
  FaCcAmazonPay,
  FaGooglePay,
  FaPaypal,
} from "react-icons/fa";

const Footer = () => {
  const icons = [
    <FaApplePay />,
    <FaCcAmazonPay />,
    <FaGooglePay />,
    <FaPaypal />,
  ];
  const information = [
    "Online Shopping and Payment",
    "Online Installment Purchase",
    "Credit Card Installment Purchase",
    "Delivery Policy",
    "Check S-member Points",
    "View S-member offers",
    "Check warranty information",
    "Search for electronic invoices",
    "Purchase invoice information",
    "Authorized Service Center",
    "Data Backup Policies",
  ];
  const services = [
    "Business to Business (B2B) Customer",
    "Payment Benefits",
    "Operating Regulations",
    "Privacy Policy",
    "Warranty Policy",
    "Business Cooperation Contact",
    "Recruitment",
    "Phone Warranty Service",
    "Extended Warranty Service",
  ];

  console.log(icons);
  return (
    <footer className="mt-5 px-28 text-[#363636]">
      <div>
        <div>
          <div className="flex justify-between">
            {/* col 1 */}
            <div className="px-4 py-4 w-1/4">
              <div className="mb-3">
                <p className="title mb-3">Hotline</p>
                <div className="text-xs pl-2">
                  <ul>
                    <li className="mb-2">
                      Call{" "}
                      <a href="">
                        <strong>1800.1234</strong>
                      </a>{" "}
                      (7h30-22h00)
                    </li>
                    <li className="mb-2">
                      Report{" "}
                      <a href="">
                        <strong>1800.1234</strong>
                      </a>{" "}
                      (7h30-22h00)
                    </li>
                    <li className="mb-2">
                      {" "}
                      Warranty{" "}
                      <a href="">
                        <strong>1800.1234</strong>
                      </a>{" "}
                      (7h30-22h00)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-3">
                <p className="title mb-3">Payment</p>
                <div className="pl-2">
                  <ul className="flex flex-row">
                    {icons.map((iconDetail, index) => (
                      <li
                        className="w-1/4 h-full border border-black rounded flex justify-center cursor-pointer bg-red-100 ml-1"
                        key={index}
                      >
                        <a href="">
                          <i className="text-2xl">{iconDetail}</i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mb-3">
                <p className="uppercase">
                  Subscribe to receive promotional offers
                </p>
                <p className="text-xs text-red-500">(*) Get 10% off voucher,</p>
                <p className="text-xs mb-3">
                  *Voucher will be sent after 24 hours, valid for new customers
                  only
                </p>
                <div className="border-2 rounded-md mb-3 ">
                  <input
                    type="text"
                    placeholder="Email *"
                    className="w-full placeholder:text-sm px-2 py-0"
                  />
                </div>
                <div className="border-2 rounded-md mb-3 ">
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full placeholder:text-sm px-2 py-0"
                  />
                </div>
                <div className="mb-3 flex ">
                  <input type="checkbox" disabled checked />
                  <a className="text-red-500 text-xs pl-1" href="">
                    I agree to the terms
                  </a>
                </div>
                <div className="bg-red-600 text-white flex justify-center rounded-md">
                  <button className="px-3 py-2 text-xs">Register now</button>
                </div>
              </div>
            </div>

            {/* col 2 */}
            <div className="px-4 py-4 w-1/4">
              <div className="mb-3">
                <div>
                  <p className="title mb-3">Information and Policies</p>
                </div>
                <div className="text-xs">
                  <ul>
                    {information.map((infor, index) => (
                      <li className="mb-2" key={index}>
                        <a href="">{infor}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* col 3 */}
            <div className="px-4 py-4 w-1/4">
              <div className="mb-3">
                <div>
                  <p className="title mb-3">
                    Services and Additional Information
                  </p>
                </div>
                <div className="text-xs">
                  <ul>
                    {services.map((service, index) => (
                      <li className="mb-2" key={index}>
                        <a href="">{service}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* col 4 */}
            <div className="px-4 py-4 w-1/4">
            <div className="mb-3">
                <div>
                  <p className="title mb-3">Connect with us</p>
                </div>
                <div className="text-xs">
                  <ul>
                    {information.map((infor, index) => (
                      <li className="mb-2" key={index}>
                        <a href="">{infor}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="px-4 py-4 w-1/4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              quis.
            </div>
            <div className="px-4 py-4 w-1/4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, ea.
            </div>
            <div className="px-4 py-4 w-1/4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
              aspernatur.
            </div>
            <div className="px-4 py-4 w-1/4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
              quibusdam?
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
