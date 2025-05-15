import { createSlice } from "@reduxjs/toolkit";

const initialState = true

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: initialState,
  reducers:{
    onDarkMode:(state, action) => true,
    offDarkMode: (state, action) => {
      return false;
    },
  }
});

export const {onDarkMode, offDarkMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;