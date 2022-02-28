import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/reducers/cartSlice";

export default configureStore({
  reducer: {
    cartReducer: cartSlice,
  },
});
