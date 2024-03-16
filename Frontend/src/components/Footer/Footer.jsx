import React from "react";
import iconPayAmz from "./PaymentIcon/icons8-amazon-pay.svg";
import iconPayGoogle from "./PaymentIcon/icons8-google-pay.svg";
import iconPayApple from "./PaymentIcon/icons8-apple-pay (1).svg";
import iconPayPaypal from "./PaymentIcon/icons8-paypal.svg";
import iconSocialFacebook from "./SocialIcon/icons8-facebook.svg";
import iconSocialInstagram from "./SocialIcon/icons8-instagram.svg";
import iconSocialZalo from "./SocialIcon/icons8-zalo.svg";
import iconSocialTiktok from "./SocialIcon/icons8-tiktok.svg";
import iconSocialYoutube from "./SocialIcon/icons8-youtube.svg";
import dienthoaivui from "..//..//imgs/dienthoaivui.webp";
import careS from "..//..//imgs/careS.webp";
import schanel from "..//..//imgs/schanel.webp";
import sforum from "..//..//imgs/sforum.png";
import certificate1 from "..//..//imgs/icons8-guarantee-certificate-64 (1).png";
import certificate2 from "..//..//imgs/icons8-guarantee-certificate-64.png";

const Footer = () => {
  const icons = [iconPayApple, iconPayAmz, iconPayGoogle, iconPayPaypal];
  const iconsSocial = [
    iconSocialFacebook,
    iconSocialInstagram,
    iconSocialZalo,
    iconSocialTiktok,
    iconSocialYoutube,
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
  const affiliate = [
    {
      title: "Warranty repair system for Phones - Computers",
      picture: dienthoaivui,
    },
    {
      title: "Authorized Apple Service Center",
      picture: careS,
    },
    {
      title: "Technology entertainment channel for young people",
      picture: schanel,
    },
    {
      title: "The latest technology information website",
      picture: sforum,
    },
  ];

  console.log(icons);
  return (
    <footer className="mt-5 text-[#363636] shadow-lg divide-solid z-20 border mb-16">
      <div>
        <div className="px-28">
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
                        className="w-1/4 border border-black rounded flex justify-center cursor-pointer bg-red-100 ml-1"
                        key={index}
                      >
                        <a className="flex justify-center" href="">
                          <img className="w-2/3" src={iconDetail} alt="" />
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
                    type="phone number"
                    placeholder="number"
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
                <div className="text-xs mb-3">
                  <ul className="flex items-center w-4/5">
                    {iconsSocial.map((iconSocial, index) => (
                      <li className="mb-2 border ml-3 rounded-md" key={index}>
                        <a href="">
                          <img src={iconSocial} alt="" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3">Affiliate websites</p>
                  {affiliate.map((channel, index) => (
                    <div key={index} className="text-xs mb-2">
                      <p className="mb-1">{channel.title}</p>
                      <a href="">
                        <img src={channel.picture} alt="" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-gray-100 w-full px-28 pt-3">
          <div className=" flex justify-between">
            <div className="px-4 py-4 w-1/4 text-xs">
              <span>
                <span>
                  <a href="">New year gift 2024</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">Phone</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">Iphone</a>
                </span>
                <br />
              </span>
              <span>
                <span>
                  <a href="">Iphone 15</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">Iphone 15 Promax</a>
                </span>
              </span>
            </div>
            <div className="px-4 py-4 w-1/4 text-xs">
              <span>
                <span>
                  <a href="">Vivo phone</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">Oppo Phone</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">Xiaomi phone</a>
                </span>
                <br />
              </span>
              <span>
                <span>
                  <a href="">Samsung Galaxy</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">Samsung Galaxy A</a>
                </span>
              </span>
            </div>
            <div className="px-4 py-4 w-1/4 text-xs">
              <span>
                <span>
                  <a href="">Laptop</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">Laptop Acer</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">Laptop Dell</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">Laptop Hp</a>
                </span>
                <br />
              </span>
              <span>
                <span>
                  <a href="">TVs</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">TV Samsung</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">TV Sony</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">TV LG</a>
                </span>
              </span>
            </div>
            <div className="px-4 py-4 w-1/4 text-xs">
              <span>
                <span>
                  <a href="">SmartHome</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">Vacuum cleaner</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">Electronic kitchen scale</a>
                </span>
                <br />
              </span>
              <span>
                <span>
                  <a href="">Air fryer</a>
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span>
                  <a href="">Electric rice cooker</a>
                </span>
              </span>
            </div>
          </div>
          {/* bottom */}
          <div>
            <div>
              <p className="text-[10px] text-[#00000080] mb-1">
                Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật DIỆU PHÚC - GPĐKKD:
                0316172372 cấp tại Sở KH & ĐT TP. HCM. Địa chỉ văn phòng:
                350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí
                Minh, Việt Nam. Điện thoại: 028.7108.9666.
              </p>
            </div>
            <div className="flex justify-center">
              <a className="flex items-center m-0" href="">
                <img className="w-[45px]" src={certificate1} alt="" />
              </a>
              <a className="flex items-center m-0" href="">
                <img className="w-[45px]" src={certificate2} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
