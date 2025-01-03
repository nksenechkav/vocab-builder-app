import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    word: '',
    category: '',
    verbType: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      const { type, value } = action.payload;
      state[type] = value;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;