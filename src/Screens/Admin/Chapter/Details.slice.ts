import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ChapterItemInterface,
  ChapterRequestInterface,
} from "../../../Interfaces/Chapter.interface";

const initialState: ChapterRequestInterface = {
  isLoading: false,
  item: {},
  error: null,
};

const detailSlice = createSlice({
  name: "admin/details/chapter",
  initialState,
  reducers: {
    loading: (state: ChapterRequestInterface) => {
      state.isLoading = true;
    },
    getChapterById: (
      state: ChapterRequestInterface,
      action: PayloadAction<ChapterItemInterface>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.item = action.payload;
    },
    setError: (
      state: ChapterRequestInterface,
      action: PayloadAction<string | null>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loading, getChapterById, setError } = detailSlice.actions;

export default detailSlice.reducer;
