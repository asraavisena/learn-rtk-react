import { configureStore } from "@reduxjs/toolkit";
import cartReduer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReduer,
  },
});
