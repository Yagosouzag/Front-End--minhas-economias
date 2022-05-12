import { Api } from '../helpers/api';

const parseResponse = (response) => response.json();

const transformObjetivo = (objetivo) => {

    return {
      ...objetivo,
      id: objetivo._id,
      descricao: objetivo.descricao,
      valor: objetivo.valor,
      atingiu: objetivo.atingiu,
    };
  };
  
  const parseTransformLista = (response) =>
    parseResponse(response).then((objetivos) => objetivos.map(transformObjetivo));
  
  const parseTransformItem = (response) =>
    parseResponse(response).then(transformPaleta);
  
  export const ObjetivoService = {
    getLista: () =>
      fetch(Api.objetivoLista(), { method: 'GET' }).then(parseTransformLista),
    getById: (id) =>
      fetch(Api.objetivoById(id), { method: 'GET' }).then(parseTransformItem),
    create: (objetivo) =>
      fetch(Api.createObjetivo(), {
        method: 'POST',
        body: JSON.stringify(objetivo),
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(parseTransformItem),
      updtateById: (id, objetivo) => fetch(Api.updateObjetivoById(id), { method: "PUT", body: JSON.stringify(objetivo), mode: "cors", headers: {
        "Content-Type": "application/json",
        } }).then(parseResponse),
    deleteById: (id) =>
      fetch(Api.deleteObjetivoById(id), { method: 'DELETE' }).then(parseResponse),
  };
  