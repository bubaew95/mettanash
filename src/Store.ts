import { configureStore } from "@reduxjs/toolkit";
import chaptersReducer from "./Screens/Main/main-slice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    chapters: chaptersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
