import { createSelector } from "@reduxjs/toolkit";
import { selectAllWords } from "../words/selectors";

export const selectFilter = (state) => state.filters;

export const selectFilteredWords = createSelector([selectAllWords, selectFilter], 
    (words, filter) => {
    return words.filter(word =>
           word.toLowerCase().includes(filter)
    );
});
