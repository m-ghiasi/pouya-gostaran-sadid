import { NavLink } from "react-router";
import logo from "../../assets/logo-2.webp";


type PropType={
    className:string;
}
export default function Logo(prop:PropType) {

  
  return (
    <div className={prop.className}>
      <NavLink 


        to={"/HomePage"}
        className=" p-4 flex gap-2 items-center "
      >
       
        <p className="text-2xl">پویا گستران سدید</p>
        <img src={logo} className="w-20 h-20" alt="" />
      </NavLink>
    </div>
  );
}
