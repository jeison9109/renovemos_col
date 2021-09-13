import { candidatos } from "../../data/candidatos";

export const getCandidatoByPublisher = (publisher) => {
  const validPublishers = ["Camara de Representantes", "Lideres Juveniles"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher"${publisher}" no es correcto`);
  }
  return candidatos.filter((candidato) => candidato.publisher === publisher);
};
