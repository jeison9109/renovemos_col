import React from "react";
import "../styles/historia.css";
import { Footer } from "../screens/Footer";

export const Historia = () => {
  return (
    <>
      <div className="separator">
        <div className="line"></div>
        <h2>Nosotros</h2>
        <div className="line"></div>
      </div>
      <div className="his">
        <div className="column">
          <h3>Vision</h3>
          <p className="text-p">
            En el 2024, Renovemos Colombia tendrá un posicionamiento como
            alternativa de poder, con representación a nivel municipal,
            departamental y nacional, con la finalidad de transformar
            significativamente al país, fortaleciendo y generando nuevas
            propuestas que permitan la su consolidación desde desarrollo
            político, económico, social y cultural.
          </p>
        </div>
        <div className="column">
          <h3>Mision</h3>
          <p className="text-p">
            Renovemos Colombia busca a través del ejercicio democrático, en
            desarrollo del derecho a la participación política, el derecho al
            trabajo, el derecho a la salud, el derecho a la educación, el
            derecho al desarrollo del campo y al disfrute de un medio ambiente
            sostenible desde una ecología integral, animalista, y así fortalecer
            la administración pública e impulsar el desarrollo económico, social
            y cultural, basados en los principios de la confianza, la
            cooperación, la fraternidad, la libertad, la inclusión y la
            igualdad.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
