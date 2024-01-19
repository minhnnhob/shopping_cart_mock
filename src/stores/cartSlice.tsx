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

export const { addToCart, removeFromCart, changeProductQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
// The code is part of a Redux setup in a TypeScript and React project, specifically a slice related to cart functionality.
// The createSlice function from @reduxjs/toolkit is used to generate a slice of the Redux store, which includes a reducer and actions.
// Three interfaces are defined: IProductData, ICartItem, and CartState. IProductData represents a product, ICartItem represents an item in the cart, and CartState represents the state of the cart.
// The initialState of the cart is an empty array.
// The cartSlice includes four reducers: addToCart, changeProductQuantity, removeFromCart, and clearCart. These reducers handle adding items to the cart, changing the quantity of a product in the cart, removing items from the cart, and clearing the cart, respectively.
// The actions generated by createSlice are exported for use in other parts of the application.
// The reducer generated by createSlice is exported as the default export.