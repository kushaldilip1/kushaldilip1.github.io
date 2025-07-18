import { Target } from "lucide-react";
import Link from "next/link";

import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa';

const socials  = [
    {icon: <FaGithub />, path: ""},
    {icon: <FaInstagram />, path: ""},
    {icon: <FaLinkedinIn />, path: ""},
    {icon: <FaWhatsapp />, path: ""},
]



const Social = ({ containerStyles, iconStyles }) => { // Destructuring props correctly
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} target="_blank">
          {/* Apply iconStyles to the child element (e.g., an <a> tag or <div>) */}
          <div className={iconStyles}>     {/* Or <a className={iconStyles}> if you want it to be an anchor */}
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Social; 