import React from "react";
import "../styles/valoresyprincipios.css";

export const ValoresyPrincipios = () => {
  return (
    <>
      <div className="separator">
        <div className="line"></div>
        <h2>Lideres Juveniles</h2>
        <div className="line"></div>
      </div>
      <div className="container-servicios">
        <div className="container-sup">
          <div className="row servi">
            <div className="main-content serv">
              <p>
                Nuestros principios no se negocian y están incluso por encima
                del poder y son basados en :
              </p>
            </div>
          </div>
        </div>

        <div className="container-cards">
          <div className="row serv1 row1">
            <div className="col-md-4 s1">
              <div className="card-item">
                <p className="text1">
                  La libertad de la persona humana y de los grupos humanos ya
                  sean instituciones, razas o naciones, y en todos sus aspectos,
                  es decir, libertad de pensamiento y de movimientos.
                </p>
                <div className="flex-row">
                  <div className="texto">
                    <h5>
                      {" "}
                      <i
                        style={{
                          fontSize: "2.3rem",
                          color: "black",
                          marginRight: "15px",
                        }}
                        className="fa fa-gavel"
                        aria-hidden="true"
                      />
                      Libertad
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 s2">
              <div className="card-item">
                <p className="text1">
                  Es tan importante que representa la base de muchos valores
                  humanos, como la solidaridad y el mutualismo, la amistad, el
                  compañerismo, la lealtad y el honor.
                </p>
                <div className="flex-row">
                  <div className="texto">
                    <h5>
                      {" "}
                      <i
                        style={{
                          fontSize: "2.0rem",
                          color: "black",
                          marginRight: "8px",
                        }}
                        className="fa fa-people-carry"
                        aria-hidden="true"
                      />
                      Cooperacion
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 s3">
              <div className="card-item">
                <p className="text1">
                  Consiste en la buena relación entre las comunidades vivientes,
                  es la proyección de la buena fe, que debe presumirse siempre
                  entre las autoridades y los particulares.
                </p>
                <div className="flex-row">
                  <div className="texto">
                    <h5>
                      {" "}
                      <i
                        style={{
                          fontSize: "2.3rem",
                          color: "black",
                          marginRight: "2px",
                        }}
                        className="fa fa-thumbs-up"
                        aria-hidden="true"
                      />{" "}
                      Confianza
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row serv2">
            <div className="col-md-4 s4">
              <div className="card-item">
                <p className="text1">
                  La inclusión integra a los grupos de personas que son
                  considerados como minorías en la sociedad.{" "}
                </p>
                <div className="flex-row">
                  <div className="texto">
                    <h5>
                      {" "}
                      <i
                        style={{
                          fontSize: "2.3rem",
                          color: "black",
                          marginRight: "15px",
                        }}
                        className="fa fa-users"
                        aria-hidden="true"
                      />
                      Inclusion
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 s5">
              <div className="card-item">
                <p className="text1">
                  Fraternidad de todos los hombres, y de todos los pueblos y
                  naciones; porque todos los seres humanos nacen libres e
                  iguales en derechos y en dignidad.
                </p>
                <div className="flex-row">
                  <div className="texto">
                    <h5>
                      {" "}
                      <i
                        style={{
                          fontSize: "2.3rem",
                          color: "black",
                          marginRight: "15px",
                        }}
                        className="fa fa-home"
                        aria-hidden="true"
                      />
                      Fraternidad
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 s6">
              <div className="card-item">
                <p className="text1">
                  La inclusión integra a los grupos de personas que son
                  considerados como minorías en la sociedad.{" "}
                </p>
                <div className="flex-row">
                  <div className="texto">
                    <h5>
                      {" "}
                      <i
                        style={{
                          fontSize: "2.3rem",
                          color: "black",
                          marginRight: "15px",
                        }}
                        className="fa fa-balance-scale"
                        aria-hidden="true"
                      />
                      Igualdad
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
