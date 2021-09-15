import React from "react";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h6>Nosotros</h6>
              <p className="text-justify">
                Renovemos Colombia <i>SOMOS UN MOVIMIENTO POLITICO</i>{" "}
                Conformada por lideres empresariales, juventudes, campesinos,
                religiosos, culturales y sociales, libres e independientes
              </p>
            </div>

            <div className="col-md-1">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="/LideresJuveniles">Lideres Juveniles</a>
                </li>
                <li>
                  <a href="/Propuestas">Propuesas</a>
                </li>
                <li>
                  <a href="/Candidatos">Candidatos</a>
                </li>
                <li>
                  <a href="/Contactenos">Contacto</a>
                </li>
              </ul>
            </div>

            <div className="col-md-5">
              <h6>Conocenos</h6>
              <ul className="footer-links">
                <li>
                  <a href="/Historia">Nosotros</a>
                </li>
                <li>
                  <a href="/DireccionNacional">Direccion Nacional</a>
                </li>
                <li>
                  <a href="/ValoresyPrincipios">Valores y Principios</a>
                </li>
                <li>
                  <a href="/Organigrama">Organigrama</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2021 Todos los derechos reservacion
                RenovemosColombia
                <a href="#"></a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/renovemoscol"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="https://www.twitter.com/Renovemos_Colom"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="instragram" href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
