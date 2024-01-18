// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProductData {
  productId: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface ICartItem {
  product: IProductData;
  quantity: number;
}

interface CartState {
  item: ICartItem[];
}

const initialState: CartState = {
  item: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const newCartItem = action.payload;

      const currentCartItemIndex = state.item.findIndex(
        (cartItem) =>
          cartItem.product.productId === newCartItem.product.productId
      );

      if (currentCartItemIndex === -1) {
        state.item.push(newCartItem);
      } else {
        state.item[currentCartItemIndex].quantity += newCartItem.quantity;
      }
    },

    changeProductQuantity: (state, action: PayloadAction<ICartItem>) => {
      const cartItem = action.payload;

      const index = state.item.findIndex(
        (i) => i.product.productId === cartItem.product.productId
      );

      state.item[index].quantity = cartItem.quantity;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.item = state.item.filter(
        (cartItem) => cartItem.product.productId !== action.payload
      );
    },

    clearCart: (state) => {
      state.item = [];
    },
  },
});

export const { addToCart, removeFromCart, changeProductQuantity } = cartSlice.actions;

export default cartSlice.reducer;
