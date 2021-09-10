import React from "react";
import "../styles/candidatos.css";
import { Footer } from "../screens/Footer";

export const Candidatos = () => {
  return (
    <>
      <div className="separator">
        <div className="line"></div>
        <h2>Candidatos</h2>
        <div className="line"></div>
      </div>

      {/********PERFILES CANDIDATOS********/}
      <div className="wrapper">
        <div className="cols">
          <div
            className="col-md-3"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="container">
              <div
                className="front"
                /* style="background-image: url(https://unsplash.it/500/500/)"*/
              >
                <div className="inner">
                  <p>Camara Representantes</p>
                  <span>Gustavo Guio</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-3"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="container">
              <div
                className="front" /*style="url(https://unsplash.it/511/511/)"*/
              >
                <div className="inner">
                  <p>Rocogged</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-3"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="container">
              <div
                className="front"
                /* style="background-image: url(https://unsplash.it/502/502/)"*/
              >
                <div className="inner">
                  <p>Strizzes</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-3"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="container">
              <div
                className="front"
                /* style="background-image: url(https://unsplash.it/503/503/)"*/
              >
                <div className="inner">
                  <p>Clossyo</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-3"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="container">
              <div
                className="front"
                /* style="background-image: url(https://unsplash.it/504/504/"*/
              >
                <div className="inner">
                  <p>Rendann</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-3"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="container">
              <div
                className="front"
                /*style="background-image: url(https://unsplash.it/505/505/)"*/
              >
                <div className="inner">
                  <p>Reflupper</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
