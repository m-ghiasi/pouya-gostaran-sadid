import { NavLink } from "react-router"
import enamad from "../../assets/enamad.png"
export default function Footer(){

    return(
        <footer className="p-4 w-full h-80 bg-gradient-to-b from-red-600 via-white to-green-600 grid grid-cols-3">
            <div>
                <h1 className="font-bold text-2xl">ارتبات با ما </h1>
                <br />
                <p><span className="font-bold text-xl">آدرس:  </span>تهران، شهرک راه آهن برج آسمان 2</p>
                <br />
                <p><span className="text-xl font-bold">تلفن:    </span>09121203243</p>
            </div>
            <div className="flex flex-col">
            <h1 className="font-bold text-2xl ">دسترسی آسان  </h1>
            <br />
            <NavLink to={"/HomePage"}>صفحه اصلی </NavLink>
            <NavLink to={"/HomePage"}>هیئت مدیره</NavLink>
            <NavLink to={"/HomePage"}>خدمات</NavLink>
            <NavLink to={"/HomePage"}>درباره ما </NavLink>
            <NavLink to={"/HomePage"}>تماس با ما </NavLink>
            </div>
            <div>
                <img className="w-40" src={enamad} alt="" />
            </div>
        </footer>
    )
}