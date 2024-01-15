import axios from "axios";
 
export interface Product {
  iproductIdd: string;
  productName: string;
  description: string;
  price: string;
  imageUrl: string;
}

export const GetAllProduct = async (): Promise<Product[]> => {
  const respone = await axios.get("http://localhost:4000/api/products");
  const data: Product[] = respone.data;
  return data;
};
