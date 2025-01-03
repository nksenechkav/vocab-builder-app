// src/redux/words/selectors.js

// export const selectContacts = (state) => state.contacts.contacts.items;

export const selectCategories = (state) => state.words.categories.list;
export const selectCategoriesIsLoading = (state) => state.words.categories.isLoading;
export const selectCategoriesError = (state) => state.words.categories.error;

// Selectors for Words
export const selectAllWords = (state) => state.words.words.list;
export const selectWordsIsLoading = (state) => state.words.words.isLoading;
export const selectWordsError = (state) => state.words.words.error;