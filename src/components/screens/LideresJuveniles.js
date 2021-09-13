import React from "react";
import { CandidatoList } from "../candidatos/CandidatoList";
import "../styles/lideresjuveniles.css";
import { Footer } from "../screens/Footer";

export const LideresJuveniles = () => {
  return (
    <>
      <div className="separator">
        <div className="line"></div>
        <h2>Lideres Juveniles</h2>
        <div className="line"></div>
      </div>

      <CandidatoList publisher="Lideres Juveniles" />
      <Footer />
    </>
  );
};
