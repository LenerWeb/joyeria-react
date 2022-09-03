import img1 from "../Assets/102.jpg";
import img2 from "../Assets/16.5.jpg";
import img3 from "../Assets/53.jpg";

function Cards() {
  return (
    <section class="container">
      <div class="table-responsive">
        <div class="conteiner">
          <div class="row">
            <div class="text-center mt-4">
              <h2>!ELIJE TUS JOYAS!</h2>
            </div>

            <div class="col-md-4 col-sm-4 mt-3">
              <div class="card">
                <img src={img1} class="card-img-top"
                  alt="" />
                <div class="card-body">
                  <h5 class="card-title text-center mt-2">PULSERAS</h5>
                  <h3 class="mt-3 text-center">Desde S./ 120</h3>
                  <br></br>
                  <h6>Caracteristicas</h6>
                  <hr></hr>
                  <ul class="card-text">
                    <li>Plata 100%</li>
                    <li>Comodas y ergonomicas</li>
                    <li>Varios diseños</li>
                    <li>Incluye IGV</li>
                  </ul>
                  <hr></hr>
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">COMPRAR</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-4 mt-3">
              <div class="card">
                <img src={img2} class="card-img-top" alt=""/>
                  <div class="card-body">
                    <h5 class="card-title text-center mt-2">COLLARES</h5>
                    <h3 class="mt-3 text-center">Desde S./ 80</h3>
                    <br></br>
                    <h6>Caracteristicas</h6>
                    <hr></hr>
                    <ul class="card-text">
                      <li>Plata 100%</li>
                      <li>Para Ella y para El</li>
                      <li>Varios diseños</li>
                      <li>Incluye IGV</li>
                    </ul>
                    <hr></hr>
                    <div class="d-grid gap-2">
                      <button class="btn btn-primary" type="button">COMPRAR</button>
                    </div>
                  </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-4 mt-3">
              <div class="card">
                <img src={img3} class="card-img-top" alt=""/>
                  <div class="card-body">
                    <h5 class="card-title text-center mt-2">PENDIENTES</h5>
                    <h3 class="mt-3 text-center">Desde S./ 60</h3>
                    <br></br>
                    <h6>Caracteristicas</h6>
                    <hr></hr>
                    <ul class="card-text">
                      <li>Plata 100%</li>
                      <li>Para Ella y las engreidas</li>
                      <li>Varios diseños</li>
                      <li>Incluye IGV</li>
                    </ul>
                    <hr></hr>
                    <div class="d-grid gap-2">
                      <button class="btn btn-primary" type="button">COMPRAR</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Cards;