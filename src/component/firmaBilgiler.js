const FirmaBilgiler = () => {
  const LineStyle = "flex";
  return (
    <div>
      <h1 className=" text-4xl font-extrabold p-12 text-center bg-clip-text bg-gradient-to-r from-orange-400 to-slate-200 text-transparent ">
        Firma Bilgileri
      </h1>
      <div className="text-2xl">
        <div className={LineStyle}>
          <p>Firma Adı:</p>
          <p>
            RES MÜŞAVİRLİK PROJE MÜHENDİSLİK HAFR. İNŞ. TAAH.SAN VE TİC.LTD.ŞTİ
          </p>
        </div>
        <div className={LineStyle}>
          <p>Firma Adresi:</p>
          <p>Beştepe Mahallesi Nergiz Sokak No:7A/9 Yenimahalle/Ankara</p>
        </div>
        <div className={LineStyle}>
          <p>Firma Cep Telefon 1:</p>
          <p>+90 532 153 14 12</p>
        </div>
        <div className={LineStyle}>
          <p>Firma Cep Telefon 2:</p>
          <p>+90 532 169 97 14</p>
        </div>
        <div className={LineStyle}>
          <p>Firma Vergi Dairesi:</p>
          <p>Maltepe</p>
        </div>
        <div className={LineStyle}>
          <p>Firma Vergi No:</p>
          <p>734 251 7594</p>
        </div>
        <div className={LineStyle}>
          <p>Firma Ticari Sicil:</p>
          <p>68550</p>
        </div>
        <div className={LineStyle}>
          <p>Firma Kuruluş Tarihi:</p>
          <p>29.01.1988</p>
        </div>
      </div>
    </div>
  );
};
export default FirmaBilgiler;
