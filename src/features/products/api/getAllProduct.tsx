import axios from "axios";
import { IProduct } from "../interface/interface";

export const GetAllProduct = async (): Promise<IProduct[]> => {
  const respone = await axios.get("http://localhost:4000/api/products");
  const data: IProduct[] = respone.data;
  return data;
};
