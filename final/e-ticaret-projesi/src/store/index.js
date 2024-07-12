import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import productReducer from "./slices/productSlice";
import categoryReducer from "./slices/categorySlice";
import authReducer from "./slices/authSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      products: productReducer,
      categories: categoryReducer,
      auth: authReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
