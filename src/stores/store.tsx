// store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//The code is part of a Redux setup in a TypeScript and React project.
//configureStore from @reduxjs/toolkit is used to create a Redux store, which is where the global state of the application lives.
//The cartReducer is imported from ./cartSlice and is responsible for handling updates to the cart state.
//The cartReducer is added to the Redux store under the key cart, making the state it manages accessible under store.getState().cart.
//The store is exported for use in other parts of the application, such as in the Provider component from react-redux.
//The RootState type is defined as the return type of store.getState, and can be used whenever something derived from the state of the store needs to be typed.
//The AppDispatch type is defined as the type of store.dispatch, and can be used whenever an action needs to be dispatched. In Redux, actions are dispatched to trigger changes to the state.