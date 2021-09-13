import React from "react";
import { CandidatoList } from "../candidatos/CandidatoList";

import { Footer } from "../screens/Footer";
import logo6 from "../img/rayas.png";

export const Candidatos = () => {
  return (
    <>
      <>
        <div className="separator">
          <div className="line"></div>
          <h2>Candidatos</h2>
          <div className="line"></div>
        </div>

        <CandidatoList publisher="Camara de Representantes" />
        <Footer />
      </>
    </>
  );
};
