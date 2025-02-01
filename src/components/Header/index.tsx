import { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa"

export default function Header() {
    const[isOpen , setIsOpen]= useState(false)


  return (
    <header className="bg-green-500  h-20 flex items-center ">
      {/* منو دسکتاپ */}
      <div className="container mx-auto flex justify-between items-center p-4 ">
        <h1>
            <img src="../assets/logo.webp" alt="" />
        </h1>
        <button className="md:hidden p-4" onClick={()=>setIsOpen(!isOpen)}>
            {isOpen? <FaTimes/>:<FaBars/>}

        </button>


        <nav className="hidden md:flex gap-8 p-5 text-xl ">
          <NavLink
            to={"/HomePage"}
            className={({ isActive }) =>
              isActive ? "text-red-800" : "text-white"
            }
          >
            صفحه اصلی{" "}
          </NavLink>
          <NavLink
            to={"/Managers"}
            className={({ isActive }) =>
              isActive ? "text-red-800" : "text-white"
            }
          >
            هیئت مدیره{" "}
          </NavLink>
          <NavLink
            to={"/Services"}
            className={({ isActive }) =>
              isActive ? "text-red-800" : "text-white"
            }
          >
            خدمات{" "}
          </NavLink>
          <NavLink
            to={"/About"}
            className={({ isActive }) =>
              isActive ? "text-red-800" : "text-white"
            }
          >
            درباره ما{" "}
          </NavLink>
          <NavLink
            to={"/ContactUs"}
            className={({ isActive }) =>
              isActive ? "text-red-800" : "text-white"
            }
          >
            تماس با ما{" "}
          </NavLink>
        </nav>
      </div>


      {/* موبایل منو */}


      <div className={`md:hidden ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"} bg-green-600 w-[80%] h-full absolute right-0 top-10 transition-all duration-500 ease-in-out p-4`}>
      <NavLink
            to={"/HomePage"}
            className={({ isActive }) =>
              isActive ? "text-red-800" : "text-black"
            }
          >
            صفحه اصلی{" "}
          </NavLink>
          <NavLink
            to={"/Managers"}
            className={({ isActive }) =>
              isActive ? "text-red-800" : "text-black"
            }
          >
            هیئت مدیره{" "}
          </NavLink>
          <NavLink
            to={"/Services"}
            className={({ isActive }) =>
              isActive ? "text-red-800" : "text-black"
            }
          >
            خدمات{" "}
          </NavLink>
          <NavLink
            to={"/About"}
            className={({ isActive }) =>
              isActive ? "text-red-800" : "text-black"
            }
          >
            درباره ما{" "}
          </NavLink>
          <NavLink
            to={"/ContactUs"}
            className={({ isActive }) =>
              isActive ? "text-red-800" : "text-white"
            }
          >
            تماس با ما{" "}
          </NavLink>
      </div>
    </header>
  );
}
