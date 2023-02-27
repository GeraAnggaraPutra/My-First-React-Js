import CardMobil from "./CardMobil";
import Mercedes1 from '../assets/img/mercedes1.jpg';
import Mercedes2 from '../assets/img/mercedes2.jpg';
import Mercedes3 from '../assets/img/mercedes3.jpg';
import CardMobil2 from "./CardMobil2";


const MainContent = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5 mb-4 fw-bold">Mobil</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mt-2"><CardMobil image={ Mercedes1 } title="Mercedes "/></div>
          <div className="col-md-4 mt-2"><CardMobil image={ Mercedes2 } title=" Mercedes "/></div>
          <div className="col-md-4 mt-2"><CardMobil image={ Mercedes3 } title=" Mercedes "/></div>
        </div>

        <div className="row">
          <div className="col-12 text-center mt-5 mb-4 fw-bold">Mobil</div>
          <div className="col-12"><CardMobil2 /></div>
          <div className="col-12 mt-3"><CardMobil2 /></div>
          <div className="col-12 mt-3"><CardMobil2 /></div>
          <div className="col-12 mt-3"><CardMobil2 /></div>
        </div>
      </div>
  )
}

export default MainContent