import axios from "axios";
import { CartItem } from "../../cart/interface/interface";

export const PostOrder = async (cartItems: CartItem[]) => {
  const order = {
    paySuccess: true,
    productsInOrder: [...cartItems] as CartItem[],
  };

  const response = await axios.post(
    "http://localhost:4000/api/checkout",
    order
  );
  console.log(response);

  return response.data;
};
