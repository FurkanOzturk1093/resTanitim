const FirmaBilgiler = () => {
  const LineStyle = "flex border-y  justify-between items-center p-4 gap-2";
  const DetailStyle = "text-orange-200";
  return (
    <div>
      <h1 className=" text-4xl font-extrabold p-12 text-center bg-clip-text bg-gradient-to-r from-orange-400 to-slate-200 text-transparent ">
        Firma Bilgileri
      </h1>
      <div className="text-2xl md:text-base ">
        <div className={LineStyle}>
          <p className="text-center">Firma Adı</p>
          <span>:</span>
          <p className={DetailStyle}>
            RES MÜŞAVİRLİK PROJE MÜHENDİSLİK HAFR. İNŞ. TAAH.SAN VE TİC.LTD.ŞTİ
          </p>
        </div>
        <div className={LineStyle}>
          <p> Adresi:</p>
          <p className={DetailStyle}>
            Beştepe Mahallesi Nergiz Sokak No:7A/9 Yenimahalle/Ankara
          </p>
        </div>
        <div className={LineStyle}>
          <p>
            Cep <br></br> Telefon 1
          </p>

          <p className={DetailStyle}>+90 532 153 14 12</p>
        </div>
        <div className={LineStyle}>
          <p>
            {" "}
            Cep <br></br> Telefon 2
          </p>

          <p className={DetailStyle}>+90 532 169 97 14</p>
        </div>
        <div className={LineStyle}>
          <p> Vergi Dairesi:</p>
          <p className={DetailStyle}> Maltepe</p>
        </div>
        <div className={LineStyle}>
          <p> Vergi No:</p>
          <p className={DetailStyle}>734 251 7594</p>
        </div>
      </div>
    </div>
  );
};
export default FirmaBilgiler;
