// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../features/products/interface/interface';


interface CartState {
    items: Product[];
}

const initialState: CartState = {
    items: [],
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const itemToAdd = action.payload;
      state.items.push(itemToAdd);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.items.findIndex(item => item.iproductIdd === id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    // remove increment, decrement, and remove reducers
  },
});

export const { addToCart,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;