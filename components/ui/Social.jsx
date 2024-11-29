import Link from "next/link";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const social = [
{icon: <FaInstagram/>, path: "www.instagram.com/danielweeks_"},
{icon: <FaFacebookF/>, path: ""},
{icon: <FaLinkedinIn/>, path: ""},
{icon: <FaTwitter />, path: "" },
];

const Social = ({containerStyles, iconStyles}) => {
  return <div className={`flex gap-x-4 ${containerStyles}`}>
    {social.map((item, index)=> {
      return <Link key={index} href={item.path} className={iconStyles}>
        {item.icon}
      </Link>
    })}
    </div>;
};

export default Social;