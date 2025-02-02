import { NavLink } from "react-router";
import enamad from "../../assets/enamad.png";
import logo from "../../assets/logo-2.webp";
export default function Footer() {
  return (
    <footer className="p-4 w-full  bg-[#c8c9c6] flex flex-col md:grid grid-cols-3">
      <div>
        <h1 className="font-bold text-2xl">ارتبات با ما </h1>
        <br />
        <p>
          <span className="font-bold text-xl">آدرس: </span>تهران، شهرک راه آهن
          برج آسمان 2
        </p>
        <br />
        <p>
          <span className="text-xl font-bold">تلفن: </span>09121203243
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl ">دسترسی آسان </h1>
        <br />
        <NavLink className="my-link" to={"/HomePage"}>
          صفحه اصلی{" "}
        </NavLink>
        <NavLink className="my-link" to={"/HomePage"}>
          هیئت مدیره
        </NavLink>
        <NavLink className="my-link" to={"/HomePage"}>
          خدمات
        </NavLink>
        <NavLink className="my-link" to={"/HomePage"}>
          درباره ما{" "}
        </NavLink>
        <NavLink className="my-link" to={"/HomePage"}>
          تماس با ما{" "}
        </NavLink>
      </div>
      <div>
        <img className="w-40" src={enamad} alt="" />
        <img className="w-40" src={logo} alt="" />
      </div>
    </footer>
  );
}
