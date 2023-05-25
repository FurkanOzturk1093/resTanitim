const FirmaBilgiler = () => {
  const LineStyle = "flex";
  return (
    <div>
      <h1 className=" text-3xl p-12 text-center ">Firma Bilgileri</h1>
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
          <p>Firma Telefon:</p>
          <p>0312 418 49 10</p>
        </div>
        <div className={LineStyle}>
          <p>Firma Fax:</p>
          <p>0312 418 49 10</p>
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
