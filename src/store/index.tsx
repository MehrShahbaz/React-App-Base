import { configureStore } from "@reduxjs/toolkit";

import authSlice from "@/store/slices/authSlice";

const store = configureStore({
  reducer: { auth: authSlice },
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState type correctly
export type AppDispatch = typeof store.dispatch;

export default store;
