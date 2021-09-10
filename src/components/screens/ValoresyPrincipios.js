import React from "react";
import "../styles/valoresyprincipios.css";
import { Footer } from "../screens/Footer";
export const ValoresyPrincipios = () => {
  return (
    <>
      <div>
        <div className="separator">
          <div className="line"></div>
          <h2>Lideres Juveniles</h2>
          <div className="line"></div>
        </div>
        <div className="container-s">
          <div className="row">
            <div className="col-md-4">
              <div className="card card-block">
                <h5 className="card-title mt-3 mb-3">
                  {" "}
                  <i
                    style={{
                      fontSize: "2.3rem",
                      color: "black",
                      marginRight: "2px",
                      marginLef: "2px",
                      marginLeft: "3px",
                    }}
                    className="fa fa-thumbs-up"
                    aria-hidden="true"
                  />{" "}
                  Confianza
                </h5>
                <p className="card-text text-justify">
                  Consiste en la buena relación entre las comunidades vivientes,
                  es la proyección de la buena fe, que debe presumirse siempre
                  entre las autoridades y los particulares.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-block">
                <h5 className="card-title  mt-3 mb-3">
                  {" "}
                  <i
                    style={{
                      fontSize: "1.8rem",
                      color: "black",
                      marginRight: "2px",
                      marginLeft: "3px",
                    }}
                    className="fa fa-people-carry"
                    aria-hidden="true"
                  />
                  Cooperacion
                </h5>
                <p className="card-text text-justify">
                  Es tan importante que representa la base de muchos valores
                  humanos, como la solidaridad y el mutualismo, la amistad, el
                  compañerismo, la lealtad y el honor.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-block">
                <h5 className="card-title  mt-3 mb-3">
                  {" "}
                  <i
                    style={{
                      fontSize: "2.3rem",
                      color: "black",
                      marginRight: "5px",
                      marginLeft: "3px",
                    }}
                    className="fa fa-gavel"
                    aria-hidden="true"
                  />
                  Libertad
                </h5>
                <p className="card-text text-justify">
                  La libertad de la persona humana y de los grupos humanos ya
                  sean instituciones, razas o naciones, y en todos sus aspectos,
                  es decir, libertad de pensamiento y de movimientos.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card card-block">
                <h5 className="card-title mt-3 mb-3">
                  {" "}
                  <i
                    style={{
                      fontSize: "2.3rem",
                      color: "black",
                      marginRight: "2px",
                      marginLef: "2px",
                      marginLeft: "3px",
                    }}
                    className="fa fa-thumbs-up"
                    aria-hidden="true"
                  />{" "}
                  Confianza
                </h5>
                <p className="card-text text-justify">
                  Consiste en la buena relación entre las comunidades vivientes,
                  es la proyección de la buena fe, que debe presumirse siempre
                  entre las autoridades y los particulares.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-block">
                <h5 className="card-title  mt-3 mb-3">
                  {" "}
                  <i
                    style={{
                      fontSize: "1.8rem",
                      color: "black",
                      marginRight: "2px",
                      marginLeft: "3px",
                    }}
                    className="fa fa-people-carry"
                    aria-hidden="true"
                  />
                  Cooperacion
                </h5>
                <p className="card-text text-justify">
                  Es tan importante que representa la base de muchos valores
                  humanos, como la solidaridad y el mutualismo, la amistad, el
                  compañerismo, la lealtad y el honor.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-block">
                <h5 className="card-title  mt-3 mb-3">
                  {" "}
                  <i
                    style={{
                      fontSize: "2.3rem",
                      color: "black",
                      marginRight: "5px",
                      marginLeft: "3px",
                    }}
                    className="fa fa-gavel"
                    aria-hidden="true"
                  />
                  Libertad
                </h5>
                <p className="card-text text-justify">
                  La libertad de la persona humana y de los grupos humanos ya
                  sean instituciones, razas o naciones, y en todos sus aspectos,
                  es decir, libertad de pensamiento y de movimientos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
