// src/redux/words/slice.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchAllWords, fetchCategories } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  categories: {
    list: [],
    isLoading: false,
    error: null,
  },
  words: {
    list: [],
    isLoading: false,
    error: null,
  },
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Categories
    builder
      .addCase(fetchCategories.pending, handlePending)
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories.isLoading = false;
        state.categories.error = null;
        state.categories.list = action.payload;
      })
      .addCase(fetchCategories.rejected, handleRejected)

      // Fetch All Words
      .addCase(fetchAllWords.pending, handlePending)
      .addCase(fetchAllWords.fulfilled, (state, action) => {
        state.words.isLoading = false;
        state.words.error = null;
        state.words.list = action.payload;
      })
      .addCase(fetchAllWords.rejected, handleRejected);
  },
});

export const wordsReducer = wordsSlice.reducer;

// const initialContacts = {
//     contacts: {
// 		items: [],
//     isLoading: false,
//     error: null,
// 	},
// }

  // name: "contacts/items",
  // initialState: initialContacts,

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchContacts.pending, handlePending)
  //     .addCase(fetchContacts.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.contacts.items = action.payload;
  //     })
  //     .addCase(fetchContacts.rejected, handleRejected)
  //     .addCase(addContact.pending, handlePending)
  //     .addCase(addContact.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.contacts.items.push(action.payload);
  //     })
  //     .addCase(addContact.rejected, handleRejected)
  //     .addCase(deleteContact.pending, handlePending)
  //     .addCase(deleteContact.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.error = null;
  //       const index = state.contacts.items.findIndex(
  //         (contact) => contact.id === action.payload.id
  //       );
  //       state.contacts.items.splice(index, 1);
  //     })
  //     .addCase(deleteContact.rejected, handleRejected)
  // }

