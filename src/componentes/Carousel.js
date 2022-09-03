import img1 from "../Assets/Logotipo Oficial - Rutty Joyas_Mesa de trabajo 1 copia.png";
import img2 from "../Assets/joyas-de-plata.jpg";
import img3 from "../Assets/portada-recarlo-t.jpg";
import img4 from "../Assets/mantenerjoyasplata.jpg";
import img5 from "../Assets/Portada Editado2.jpg";


function Carousel() {
  return (
    <section class="container">
      <div class="table-responsive">

        <section className="container mt-2">
          <div id="controls" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-indicators">
              <button data-bs-target="#controls" data-bs-slide-to="0" className="active"></button>
              <button data-bs-target="#controls" data-bs-slide-to="1"></button>
              <button data-bs-target="#controls" data-bs-slide-to="2"></button>
              <button data-bs-target="#controls" data-bs-slide-to="3"></button>
              <button data-bs-target="#controls" data-bs-slide-to="4"></button>

            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} alt="" className="d-block w-100 rounded mx-auto"></img>
              </div>
              <div className="carousel-item">
                <img src={img2} alt="" className="d-block w-100 rounded mx-auto" />
              </div>
              <div className="carousel-item">
                <img src={img3} alt="" className="d-block w-100 rounded mx-auto" />
              </div>
              <div className="carousel-item">
                <img src={img4} alt="" class="d-block w-100 rounded mx-auto" />
              </div>
              <div className="carousel-item">
                <img src={img5} alt="" className="d-block w-100 rounded mx-auto" />
              </div>
            </div>
            <button className="carousel-control-prev" data-bs-target="#controls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" data-bs-target="#controls" data-bs-slide="next">

              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Carousel;