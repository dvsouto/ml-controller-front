import { NextApiRequest, NextApiResponse } from "next";
import { MercadoLivreControllerApi } from "@services/mercadoLivreControllerApi";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const mercadoLivreControllerApi = new MercadoLivreControllerApi();
  const categories = await mercadoLivreControllerApi.getCategories();

  res.status(200).json(categories.data);
}