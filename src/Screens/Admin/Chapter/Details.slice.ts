import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ChapterItemInterface,
  ChapterRequestInterface,
} from "../../../Interfaces/Chapter.interface";
import { getChapterByIdApi } from "../../../FireBase/FirebaseApi";

const initialState: ChapterRequestInterface = {
  isLoading: false,
  item: null,
  error: null,
};

export const fetchChapterById: any = createAsyncThunk<
  ChapterItemInterface,
  string
>("admin/details/chapter", async (id) => {
  const response = await getChapterByIdApi(id);
  return response as ChapterItemInterface;
});

export const deleteChapterItemById: any = createAsyncThunk<boolean, string>(
  "admin/details/delete_chapter_item",
  async (id) => {
    return true;
  }
);

const detailSlice = createSlice({
  name: "admin/details/chapter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChapterById.pending, (state: ChapterRequestInterface) => {
        state.isLoading = true;
      })
      .addCase(
        fetchChapterById.fulfilled,
        (state: ChapterRequestInterface, action) => {
          state.isLoading = false;
          state.error = null;
          state.item = action.payload;
        }
      )
      .addCase(
        fetchChapterById.rejected,
        (state: ChapterRequestInterface, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default detailSlice.reducer;
