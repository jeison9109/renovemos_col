import React from "react";
import "../styles/home.css";
//import fondo from "../img/fondo.jpg";
//import rayas from "../img/rayas.png";
import logo from "../img/fond-lg.png";
import "../styles/footer.css";
import { Footer } from "../screens/Footer";

export const Home = () => {
  return (
    <>
      <div className="fond-ini">
        {/*  <img src={fondo} alt={fondo} />*/}
        <div className="container1">
          <div className="row">
            <div className="col-md-8">
              <div className="main-content">
                <h1>Renovemos Colombia</h1>
                <h4>
                  Somos un movimiento político renovador, con pensamiento
                  incluyente, en donde con las distintas posiciones ideológicas,
                  religiosas, raciales, sociales, económicas y de género,
                  podamos construir un nuevo proyecto de nación. Basados en la
                  libertad de un pensamiento vanguardista y defensor incansable
                  de los Derechos Constitucionales. Conformada por líderes
                  empresariales, juventudes, campesinos, religiosos, culturales
                  y sociales, libres e independientes, con vocación de
                  participación política a nivel local, regional y nacional,
                  como alternativa de pensamiento ideológico y participativo en
                  Colombia.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="logo">
          <img className="logo" src={logo} logo={logo} />
        </div>
      </div>
      <Footer />
    </>
  );
};
