import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { productItems: [], visitedItems: [], cartItems: [] };

//for thunk async call for server
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     return response.data;
//   }
// );
// export const fetchProductById = createAsyncThunk(
//   "products/fetchProductById",
//   async (productId) => {
//     const response = await axios.get(
//       `https://fakestoreapi.com/products/${productId}`
//     );
//     return response.data;
//   }
// );

const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cartItems = [
        ...state.cartItems.filter((item) => {
          if (item.id !== action.payload) {
            return item;
          } else {
            return null;
          }
        }),
      ];
    },
    addToVisitedItems: (state, action) => {
      state.visitedItems.push(action.payload);
    },
  },

  ///for async thunk
  // extraReducers: (builder) => {
  //   builder.addCase(fetchProducts.fulfilled, (state, action) => {
  //     console.log("action payload", action.payload);
  //     state.productItems.push(...action.payload);
  //   });
  //   builder.addCase(fetchProductById.fulfilled, (state, action) => {
  //     console.log("action payload product id", action.payload);
  //     state.visitedItems.push(action.payload);
  //   });
  // },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, addToVisitedItems } =
  cartSlice.actions;
