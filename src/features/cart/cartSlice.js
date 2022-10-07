import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import cartItems from "../../cartItems"; //? dummy local data

const cartItemsUrl = "https://course-api.com/react-useReducer-cart-project";
// ! We have the extra lifecycle actions fir every function we create
export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(cartItemsUrl)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload: itemId }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    updateItemCount: (state, { payload: { id: itemId, actionType } }) => {
      const cartItem = state.cartItems.find((item) => item.id === itemId);

      switch (actionType) {
        case "inc":
          if (cartItem.amount < cartItem.stock) {
            cartItem.amount = cartItem.amount + 1;
          } else {
            alert("No more stock");
          }
          break;
        case "dec":
          if (cartItem.amount > 0) {
            cartItem.amount = cartItem.amount - 1;
          }
          break;
        default:
          console.log("No such option");
          break;
      }
    },
    updateTotalAmount: (state) => {
      let totalAmount = 0;
      let totalPrice = 0;

      state.cartItems.forEach((element) => {
        totalAmount = totalAmount += element.amount;
        totalPrice += element.amount * element.price;
      });

      state.amount = totalAmount;
      state.total = totalPrice.toFixed(2);
    },
  },
  // ? once the data is fetched add it to the state
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      // console.log(action);

      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, updateItemCount, updateTotalAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
