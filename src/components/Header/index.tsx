import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";

import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  // {close mobile menu when clicked out side}
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
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

  type ItemTypes = { to: string; label: string };

  const items: ItemTypes[] = [
    { to: "/HomePage", label: "صفحه اصلی" },
    { to: "/Managers", label: "هیئت مدیره" },
    { to: "/Services", label: "خدمات" },
    { to: "/About", label: "درباره ما" },
    { to: "/ContactUs", label: "تماس با ما" },
  ];

  const handelClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-[#c8c8c7]  h-20 flex items-center ">
      <div className="container mx-auto flex justify-between items-center ">
        <button className="md:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <Logo className="md:hidden"/>

        {/* منو دسکتاپ */}

        <nav className="hidden md:flex gap-8 p-5 text-xl ">
          {items.map((item: any) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-red-800 " : "text-black "
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Logo className="hidden md:block"/>
      </div>

      {/* موبایل منو */}

      <div
        ref={menuRef}
        className={`md:hidden ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        } flex flex-col gap-2 text-xl  bg-[#c8c8c7] w-[80%] h-full absolute right-0 top-10 transition-all duration-500 ease-in-out p-4 z-10`}
      >
        {items.map((item) => (
          <NavLink
            to={item.to}
            key={item.label}
            onClick={handelClick}
            className={({ isActive }) =>
              `${isActive ? "text-red-800" : "text-black"} my-border p-2`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
