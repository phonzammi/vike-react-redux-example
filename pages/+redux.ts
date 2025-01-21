import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../lib/features/counter/counterSlice";

const rootReducer = combineReducers({ counter: counterReducer });

export const redux = {
  makeStore: (preloadedState: any) => {
    return configureStore({
      reducer: rootReducer,
      preloadedState,
    });
  },
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof redux.makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
