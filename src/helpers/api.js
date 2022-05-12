const ObjetivoContext = {
    objetivoEndpoint: () => `${Api.baseUrl}/objetivos`,
    objetivoLista: () => `${ObjetivoContext.objetivoEndpoint()}/all-objetivos`,
    objetivoById: (id) => `${ObjetivoContext.objetivoEndpoint()}/one-objetivo/${id}`,
    createObjetivo: () => `${ObjetivoContext.objetivoEndpoint()}/create-objetivo`,
    updateobjetivoById: (id) => `${ObjetivoContext.objetivoEndpoint()}/update-objetivo/${id}`,
    objetivoobjetivoById: (id) => `${ObjetivoContext.objetivoEndpoint()}/delete-objetivo/${id}`,
  };
  
  export const Api = {
    baseUrl: process.env.REACT_APP_API_URL,
    ...ObjetivoContext,
  };


 