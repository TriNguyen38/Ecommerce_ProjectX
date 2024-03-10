import { GiSmartphone } from "react-icons/gi";
import { CiLaptop } from "react-icons/ci";
import { TbDeviceAirpods } from "react-icons/tb";
import { IoWatchOutline } from "react-icons/io5";
import { RiHomeWifiLine } from "react-icons/ri";
import { BsUsbPlug } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { PiTelevisionSimple } from "react-icons/pi";
import { FcTwoSmartphones } from "react-icons/fc";
import { LuSmartphoneCharging } from "react-icons/lu";
import { TbSpeakerphone } from "react-icons/tb";
import { FaRegNewspaper } from "react-icons/fa6";
export const listSidebar = [
  {
    index: 1,
    name1: "Phone,",
    name2 : "Tablet",
    icon : <GiSmartphone/>
  },
  {
    index: 2,
    name1: "Laptop",
    icon: <CiLaptop/>,
  },
  {
    index: 3,
    name1: "Headphones",
    icon: <TbDeviceAirpods />,
  },
  {
    index: 4,
    name1: "Watches,",
    name2: "Cameras",
    icon: <IoWatchOutline />,
  },
  {
    index: 5,
    name1: "Home Appliances,",
    name2: "Smarthome",
    icon: <RiHomeWifiLine />,
  },
  {
    index: 6,
    name1: "Tech Accessories",
    icon: <BsUsbPlug />,
  },
  {
    index: 7,
    name1: "PC,",
    name2: "Screen",
    icon: <FaComputer />,
  },
  {
    index: 8,
    name1: "TVs",
    icon: <PiTelevisionSimple />,
  },
  {
    index: 9,
    name1: "Refresh and Renew",
    icon: <FcTwoSmartphones />,
  },
  {
    index: 10,
    name1: "Second-hand goods",
    icon: <LuSmartphoneCharging />,
  },
  {
    index: 11,
    name1: "Sales",
    icon: <TbSpeakerphone />,
  },
  {
    index: 12,
    name1: "News",
    icon: <FaRegNewspaper />,
  },
];
