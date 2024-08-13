import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ChapterRequestInterface,
  ChapterItemInterface,
} from "../../Interfaces/Chapter.interface";
import { getChapterByIdApi } from "../../FireBase/FirebaseApi";

export interface QuizInterface {}

const initialState: ChapterRequestInterface = {
  isLoading: false,
  item: null,
  error: null,
};

interface TD {
  parentId: string;
  id: string;
}

export const findQuizByIds: any = createAsyncThunk<TD, any>(
  "quiz/findById",
  async ({ parentId, id }) => {
    console.log("itemId", parentId);
    try {
      const data = await getChapterByIdApi(parentId, id);
      console.log("data", data);
    } catch (err) {
      setQuestionError("error");
    }
    return parentId;
  }
);

const quizeSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    loading: (state: ChapterRequestInterface) => {
      state.isLoading = true;
    },
    getQuestions: (
      state: ChapterRequestInterface,
      action: PayloadAction<ChapterItemInterface>
    ) => {
      state.isLoading = false;
      state.item = action.payload;
      state.error = null;
    },
    setQuestionError: (
      state: ChapterRequestInterface,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loading, getQuestions, setQuestionError } = quizeSlice.actions;

export default quizeSlice.reducer;
