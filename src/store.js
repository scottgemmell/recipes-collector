import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import favouritesReducer from "./features/favourites/favouritesSlice";
import { createLogger } from "redux-logger";

const logger = createLogger({
	collapsed: true,
});

export default configureStore({
	reducer: {
		counter: counterReducer,
		favourites: favouritesReducer,
	},
	middleware: [...getDefaultMiddleware(), logger],
});
