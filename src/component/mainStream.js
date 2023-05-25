import logo from "../img/logo.jpg";
import Hakkımızda from "./hakkımızda";
import FirmaBilgiler from "./firmaBilgiler";
import Hizmetlerimiz from "./hizmetlerimiz";
import Projeler from "./projeler";
import Referanslar from "./referanslar";
import Belgeler from "./belgeler";
const MainStream = () => {
  return (
    <div className=" bg-gray-950 text-white bg-opacity-90 ">
      <div className="flex flex-col items-center w-4/6 mx-auto  ">
        <img
          src={logo}
          alt="logo"
          className=" shadow-2xl rounded-xl mt-8"
          width={600}
        />
        <h2 className=" text-7xl p-12 ">Tanıtım Dosyası</h2>
        <h1 className="font-extrabold text-transparent text-5xl text-center bg-clip-text bg-gradient-to-r from-orange-400 to-slate-200 w-5/6 p-10 ">
          RES MÜŞAVİRLİK PROJE MÜHENDİSLİK HAFR. İNŞ. TAAH.SAN VE TİC.LTD.ŞTİ
        </h1>
        <p className="text-2xl">
          Beştepe Mahallesi Nergiz Sokak No:7A/9 Yenimahalle/Ankara
        </p>
        <Hakkımızda />
        <FirmaBilgiler />
        <Hizmetlerimiz />
        <Projeler />
        <Referanslar />
        <Belgeler />
      </div>
    </div>
  );
};
export default MainStream;
