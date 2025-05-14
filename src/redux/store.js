import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./list";
import darkModeReducer from "./darkMode";

const store = configureStore({
  reducer: {
    list: listReducer,
    darkMode: darkModeReducer,
  },
});

export default store;
