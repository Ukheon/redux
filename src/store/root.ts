import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countSlice } from "./slice/count";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const rootReducers = combineReducers({
	count: countSlice.reducer,
});

export const rootStore = configureStore({ reducer: rootReducers });

type RootState = ReturnType<typeof rootReducers>;
type AppDispatch = typeof rootStore.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
