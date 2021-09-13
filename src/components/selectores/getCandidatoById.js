import { candidatos } from "../../data/candidatos";

export const getCandidatoById = (id) => {
  return candidatos.find((candidato) => candidato.id === id);
};
