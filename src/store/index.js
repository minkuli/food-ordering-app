import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";

// const initialMealsState = {}

/* const mealsSlice = createSlice({
    name: 'meals',
    initialState: initialMealsState,
    reducers: {

    }
}) */

const store = configureStore({
  reducer: {
    //meals: mealsSlice.reducer,
    cart: cartReducer,
  },
});

//export const mealsActions = mealsSlice.actions

export default store;
