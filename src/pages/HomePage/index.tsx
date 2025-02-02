import Card from "../../components/Card";
import MySlider from "../../components/MySlider";
import manshor from "../../assets/manshor.jpg";
import binahayat from "../../assets/binahayat.jpg";
import gavahinameh from "../../assets/gavahinameh.png";
import tanzimat from "../../assets/tanzimat.png";
import kahab from "../../assets/kahab.png";
import monitor from "../../assets/monitor.jpg";
import Name from "../../components/Name";

export default function HomePage() {
  return (
    <div>
      <MySlider />

      <Name/>

      

      <div className=" flex flex-col p-4 md:grid grid-cols-3 gap-y-3">
        <Card
          srcImage={manshor}
          lable="منشور"
          lable2=" منشور برند شرکت پویا گستران سدید "
        />
        <Card
          srcImage={binahayat}
          lable="چشم اندار"
          lable2=" استراتژی و چشم انداز شرکت پویا گستران سدید "
        />
        <Card
          srcImage={tanzimat}
          lable="توانایی ها"
          lable2=" توانایی و دستور عمل های در حال اجرا"
        />
        <Card
          srcImage={gavahinameh}
          lable="گواهی نامه ها"
          lable2=" گواهی رضایت مشتری و ISO"
        />
        <Card srcImage={kahab} lable="کهاب" lable2=" طرح زیست محیطی کهاب" />
        <Card
          srcImage={monitor}
          lable="دیسپاچینگ"
          lable2=" جرای طرح دیسپچینگ توسط شرکت های مورد تایید"
        />
      </div>
    </div>
  );
}
