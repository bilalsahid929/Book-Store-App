import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import booksReducer from "./features/books/booksSlice";

const persistConfig = {
  key: "books",
  storage: storage,
};

const rootReducer = combineReducers({
  books: persistReducer(persistConfig, booksReducer),
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
