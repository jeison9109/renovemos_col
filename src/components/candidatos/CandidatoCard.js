import React from "react";
import logo6 from "../img/rayas.png";

import "../styles/candidatos.css";

export const CandidatoCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appeareance,
  characters,
}) => {
  return (
    <>
      {/********PERFILES CANDIDATOS********/}
      <div className="wrapper">
        <div className="cols">
          <div
            className="col-md-7"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${logo6})` }}
                /* style="background-image: url(https://unsplash.it/500/500/)"*/
              >
                <div className="inner">
                  <p>{publisher}</p>
                  <span>{superhero}</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>{alter_ego}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
