import axios from "axios";
import { Product } from "../interface/interface";

export const GetAllProduct = async (): Promise<Product[]> => {
  const respone = await axios.get("http://localhost:4000/api/products");
  const data: Product[] = respone.data;
  return data;
};
