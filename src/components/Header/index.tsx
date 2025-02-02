import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo-2.webp";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  // {close mobile menu when clicked out side}
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }

      // if (menuRef.current && event.target instanceof Node && !menuRef.current.contains(event.target)) {
      //   setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#c8c8c7]  h-20 flex items-center ">
      <div className="container mx-auto flex justify-between items-center ">
        <NavLink
          to={"/HomePage"}
          className="md:hidden p-4 flex gap-2 items-center"
        >
          <img src={logo} className="w-20 h-20" alt="" />
          <p className="text-2xl">پویا گستران سدید</p>
        </NavLink>
        <button className="md:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* منو دسکتاپ */}

        <nav className="hidden md:flex gap-8 p-5 text-xl ">
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
              isActive ? "text-red-800" : "text-black"
            }
          >
            تماس با ما{" "}
          </NavLink>
        </nav>
        <NavLink to={"/HomePage"} className= "hidden md:flex items-center">
          <p className="text-2xl">پویا گستران سدید</p>
          <img src={logo} className=" w-20 h-20" alt="" />
        </NavLink>
        
      </div>

      {/* موبایل منو */}

      <div
        ref={menuRef}
        className={`md:hidden ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        } flex flex-col gap-2 text-xl  bg-[#c8c8c7] w-[80%] h-full absolute right-0 top-10 transition-all duration-500 ease-in-out p-4 z-10`}
      >
        <NavLink
          to={"/HomePage"}
          className={({ isActive }) =>
            `${isActive ? "text-red-800" : "text-black"} my-border p-2`
          }
        >
          صفحه اصلی{" "}
        </NavLink>
        <NavLink
          to={"/Managers"}
          className={({ isActive }) =>
            `${isActive ? "text-red-800" : "text-black"} my-border p-2`
          }
        >
          هیئت مدیره{" "}
        </NavLink>
        <NavLink
          to={"/Services"}
          className={({ isActive }) =>
            `${isActive ? "text-red-800" : "text-black"} my-border p-2`
          }
        >
          خدمات{" "}
        </NavLink>
        <NavLink
          to={"/About"}
          className={({ isActive }) =>
            `${isActive ? "text-red-800" : "text-black"} my-border p-2`
          }
        >
          درباره ما{" "}
        </NavLink>
        <NavLink
          to={"/ContactUs"}
          className={({ isActive }) =>
            `${isActive ? "text-red-800" : "text-black"} my-border p-2`
          }
        >
          تماس با ما{" "}
        </NavLink>
      </div>
    </header>
  );
}
