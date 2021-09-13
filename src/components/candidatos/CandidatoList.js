import React from "react";
import { getCandidatoByPublisher } from "../selectores/getCandidatoByPublisher";
import { CandidatoCard } from "./CandidatoCard";

export const CandidatoList = ({ publisher }) => {
  const candidatos = getCandidatoByPublisher(publisher);

  return (
    <>
      {candidatos.map((candidato) => (
        <CandidatoCard key={candidato.id} {...candidato} />
      ))}
    </>
  );
};
