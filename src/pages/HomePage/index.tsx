import Card from "../../components/Card";
import MySlider from "../../components/MySlider";
import manshor from "../../assets/manshor.jpg";
import binahayat from "../../assets/binahayat.jpg";
import gavahinameh from "../../assets/gavahinameh.png";
import tanzimat from "../../assets/tanzimat.png";
import kahab from "../../assets/kahab.png";
import monitor from "../../assets/monitor.jpg";
import Name from "../../components/Name";
import Footer from "../../components/Footer";
import Customer from "../../components/Customer";
import { Outlet } from "react-router";
import Button from "../../components/Button";
import { useEffect, useState } from "react";

export default function HomePage() {
  type ItmTypes = {
    to: string;
    lable: string;
    lable2: string;
    srcImage: any;
  };
  const data: ItmTypes[] = [
    {
      to: "paper",
      lable: "منشور",
      lable2: " منشور برند شرکت پویا گستران سدید ",
      srcImage: manshor,
    },
    {
      to: "CheshmAndaz",
      lable: "چشم اندار",
      lable2: " استراتژی و چشم انداز شرکت پویا گستران سدید",
      srcImage: binahayat,
    },
    {
      to: "Ability",
      lable: "توانایی ها",
      lable2: " توانایی و دستور عمل های در حال اجرا",
      srcImage: tanzimat,
    },
    {
      to: "License",
      lable: "گواهی نامه ها",
      lable2: "گواهی رضایت مشتری و ISO",
      srcImage: gavahinameh,
    },
    {
      to: "kahab",
      lable: "کهاب",
      lable2: " طرح زیست محیطی کهاب",
      srcImage: kahab,
    },
    {
      to: "Dispaching",
      lable: "دیسپاچینگ",
      lable2: "جرای طرح دیسپچینگ توسط شرکت های مورد تایید",
      srcImage: monitor,
    },
  ];

  const [isVisibel, setIsVisibel] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisibel(true);
    }, 300);
  }, []);

  return (
    <div>
      <MySlider />
      <Button
        label="جایگاه های تحت پوشش"
        className={`${
          isVisibel ? "translate-x-0" : "translate-x-[200%]"
        }  absolute z-5
         right-[5%] md:right-[10%]
          top-[23vh] md:top-[45vh]
           bg-green-600
            p-2 md:p-5
             text-white 
              rounded-xl md:rounded-2xl 
              font-bold
               transform transition-transform duration-500
               text-sm md:text-xl`}
      />
     
        <Button
          label="جهت همکاری"
          className={`${
            isVisibel ? "translate-x-0" : "translate-x-[200%]"
          }  absolute z-5
         right-[5%] md:right-[10%]
          top-[30vh] md:top-[60vh]
           bg-red-600
            p-2 md:p-5
             text-white 
              rounded-xl md:rounded-2xl 
              font-bold
               transform transition-transform duration-500
               text-sm md:text-xl`}
        />
        <Button
          label="موقعیت مکانی انبار"
          className={`${
            isVisibel ? "translate-x-0" : "translate-x-[250%]"
          }  absolute z-5
         right-[30%] md:right-[22%]
          top-[30vh] md:top-[60vh]
           bg-red-600
            p-2 md:p-5
             text-white 
              rounded-xl md:rounded-2xl 
              font-bold
               transform transition-transform duration-500
               text-sm md:text-xl`}
        />
      

      <Name label="شرکت پویان گستران سدید" />

      <div className=" flex flex-col p-4 md:grid grid-cols-3 gap-y-3">
        {data.map((d) => (
          <Card
            to={d.to}
            key={d.to}
            srcImage={d.srcImage}
            lable={d.lable}
            lable2={d.lable2}
          />
        ))}
      </div>
      <Name label="نهاد ها و شرکت های همکار" />
      <Customer />
      <Footer />
      <Outlet />
    </div>
  );
}
