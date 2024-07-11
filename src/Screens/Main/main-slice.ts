import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ChaptersState {
  isLoading: boolean;
  items: [];
  errors: null | string;
}

const initialState: ChaptersState = {
  isLoading: false,
  items: [],
  errors: null,
};

export const chaptersSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {
    loading: (state: ChaptersState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    getChapters: (state: ChaptersState, action: PayloadAction<any>) => {
      state.items = action.payload;
      state.errors = null;
    },
    setError: (
      state: ChaptersState,
      action: PayloadAction<string | string>
    ) => {
      state.errors = action.payload;
    },
  },
});

export const { loading, getChapters, setError } = chaptersSlice.actions;

export default chaptersSlice.reducer;
