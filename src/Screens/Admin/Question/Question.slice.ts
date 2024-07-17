import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getConversationsByChapterId } from "../../../FireBase/FirebaseApi";

const initialState = {};

export const fetchQuestionsByChapterId: any = createAsyncThunk<any, string>(
  "admin/questions/get",
  async (id: string) => {
    const questions = await getConversationsByChapterId(id);
    console.log("questions", questions);
    return {};
  }
);

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsByChapterId.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(
        fetchQuestionsByChapterId.fulfilled,
        (state: any, action: any) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        }
      )
      .addCase(
        fetchQuestionsByChapterId.rejected,
        (state: any, action: any) => {
          state.isLoading = false;
          state.error = action.payload;
          state.items = [];
        }
      );
  },
});

export default questionSlice.reducer;
