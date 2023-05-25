import Data from "../data/data";
const Projeler = () => {
  return (
    <div>
      <h1 className=" text-4xl font-extrabold p-12 text-center bg-clip-text bg-gradient-to-r from-orange-500 to-slate-200 text-transparent  ">
        Projeler
      </h1>
      <div>
        {Data.map((proje) => (
          <div>
            <h3 className=" text-4xl p-12 text-center mt-12 ">
              {proje.isinAdi}
            </h3>
            <h3 className=" text-3xl p-8 text-center ">
              <span className=" text-orange-300 ">KURUM:</span>
              <span></span>
              {proje.Kurum}
            </h3>
            <div className="flex flex-wrap justify-evenly gap-10">
              {proje.fotograflar.map((singlePicture) => (
                <img
                  className=" w-80 h-80 shadow-2xl transform 
                  transition duration-500 hover:scale-110 rounded-xl "
                  src={singlePicture}
                  alt={singlePicture}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projeler;
