import React, { ReactElement } from "react";
import Image from "next/image";

import { ButtonImg } from "@/src/utils/assets"


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | ReactElement;
  variant?: "primary" | "neutral" | "tertiary";
  icon?: string;
  iconAfter?: string;
  containerClassName?:string;
  onClick?: ()=>void;
}

const Button: React.FC<ButtonProps> = ({
  label = "JOIN THE WAITLIST",
  containerClassName="",
  className="",
  onClick=()=>{},
 disabled=false
}) => {
  return (
    <div role="button" onClick={onClick} className={`flex justify-center relative ${containerClassName} !overflow-hidden`}>
      {disabled && <div className="absolute top-0 left-0 right-0 bottom-0 z-10 cursor-no-drop opacity-50">
      </div>}
      <div className="relative">
      <img 
        alt="" 
        className={`h-full ${disabled && 'image-filter'}`} 
        src={'https://res.cloudinary.com/dmtcjnlev/image/upload/v1713428922/NavisWebsite/ButtonImg_fkidd2.png'}  
        // layout="fill"
        // objectFit="cover" 
        // priority 
      />
      <p className="center-absolute-content w-full text-center font-Saira text-[12px] md:text-lg font-medium leading-[20px] text-white capitalize" style={{ whiteSpace: 'nowrap' }}>{label}</p>
    </div>
    </div>
  );
};

export default Button;
