import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChapterRequestInterface } from "../../Interfaces/Chapter.interface";

export interface QuizInterface {

}

const initialState = {};

const quizeSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        loading: (state: ChapterRequestInterface) => {
            state.isLoading = true;
        },
        getQuestions: (state: ChapterRequestInterface, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.item = action.payload;
            state.error = null;
        },
        setQuestionError: (state: ChapterRequestInterface, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
});

export const {loading, getQuestions, setQuestionError } = quizeSlice.actions;

export default quizeSlice.reducer;