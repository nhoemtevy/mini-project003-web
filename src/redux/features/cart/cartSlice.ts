import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProductType } from "@/lib/definitions";
import type { RootState } from "@/redux/store";

const initialState = {
  products: [] as CartProductType[],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProductType>) => {
      const productToAdd = action.payload;
      const existingProductIndex = state.products.findIndex(product => product.id === productToAdd.id);
      const price = parseFloat(productToAdd.price.toString());
      if (existingProductIndex === -1) {
          state.products.push(productToAdd);
          state.totalPrice += price;
      } else {
          state.totalPrice += price;
      }
  },

    removeFromCart: (state, action: PayloadAction<number>) => {
      // find product by id
      const product = state.products.find(
        (product) => product.id === action.payload
      );

      state.totalPrice -= product?.price || 0;

      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

// export actions
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// create selector
export const selectProducts = (state: RootState) => state.cart.products;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
