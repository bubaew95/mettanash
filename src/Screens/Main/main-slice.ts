import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChaptersRequestInterface } from "../../Interfaces/Chapter.interface";

const initialState: ChaptersRequestInterface = {
  isLoading: false,
  items: [],
  error: null,
};

export const chaptersSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {
    loading: (state: ChaptersRequestInterface) => {
      state.isLoading = true;
    },
    getChapters: (
      state: ChaptersRequestInterface,
      action: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    setError: (
      state: ChaptersRequestInterface,
      action: PayloadAction<string | string>
    ) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { loading, getChapters, setError } = chaptersSlice.actions;

export default chaptersSlice.reducer;
