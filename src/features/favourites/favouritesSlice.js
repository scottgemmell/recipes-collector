import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "favourites",
	initialState: {
		value: JSON.parse(window.localStorage.getItem("favourites")) || [],
	},
	reducers: {
		toggleFavourite: (state, action) => {
			//console.log({ state, action, value: +action.payload });
			const hasFavourite = state.value.indexOf(+action.payload);
			hasFavourite === -1 
				? state.value.push(+action.payload) 
				: state.value.splice(hasFavourite, 1);
			window.localStorage.setItem("favourites", JSON.stringify(state.value));
		},
	},
});

export const selectFavourites = state => state.favourites.value;
export const { toggleFavourite } = slice.actions;

export default slice.reducer;
