import logo from "../img/logo.jpg";
import Hakkımızda from "./hakkımızda";
import FirmaBilgiler from "./firmaBilgiler";
import Hizmetlerimiz from "./hizmetlerimiz";
import Projeler from "./projeler";
import Referanslar from "./referanslar";
import Belgeler from "./belgeler";
const MainStream = () => {
  return (
    <div className="main">
      <div className="flex flex-col items-center ">
        <img src={logo} alt="logo" className="" width={600} />
        <h2 className=" text-7xl p-12 ">Tanıtım Dosyası</h2>
        <h1 className="text-5xl text-center w-3/5 p-12">
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
