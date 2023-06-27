import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
	name: "countSlice",
	initialState: { value: 0 },
	reducers: {
		up: (state) => {
			state.value = state.value + 1;
		},
		down: (state) => {
			state.value = state.value - 1;
		},
	},
});

export const { up, down } = countSlice.actions;
