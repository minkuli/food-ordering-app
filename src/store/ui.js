import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isSubmitting: false,
    didSubmit: false,
    isCheckout: false,
    error: null,
  },
  reducers: {
    checkOut(state) {
      state.isCheckout = !state.isCheckout;
    },
    submitOrder(state) {
      state.isSubmitting = !state.isSubmitting;
    },
    orderSubmitted(state) {
      state.didSubmit = !state.didSubmit;
    },
    showError(state, action) {
      state.error = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
