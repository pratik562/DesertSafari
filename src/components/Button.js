import { AssistantDirection } from "@mui/icons-material";
import Image from "next/image";

const Button = ({ label = "Click Me", iconUrl = null,fullwidth,onClick,className,type }) => {
  return (
    <button
    type={type}
    onClick={onClick}
      className={`flex items-center justify-center px-7 py-4 rounded-full 
      bg-primary text-primary-text font-montserrat leading-normal 
       border-primary transition-all duration-300 hover:opacity-80 ${fullwidth && "w-full"} ${className}`}
    >
      {label}
      {iconUrl && (
         <AssistantDirection fontSize="inherit" style={{height:30 , width:30}}/>
      )}
    </button>
  );
};

export default Button;
