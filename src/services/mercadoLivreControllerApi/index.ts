import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

class MercadoLivreControllerApi {
  client: AxiosInstance;

  constructor(){
    this.client = axios.create({
      baseURL: "http://ml-controller-api-app:3000"
    } as CreateAxiosDefaults);
  }

  getCategories(){
    return this.client.get("/categories/list");
  }
}

export {
  MercadoLivreControllerApi
};