import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { AuthState } from "../../types/sliceTypes/authSliceTypes";

const selectAuthState = (state: RootState): AuthState => state.auth;

export const selectToken = createSelector(
  selectAuthState,
  (authState) => authState.token
);

export const isAuthLoading = createSelector(
  selectAuthState,
  (authState) => authState.loading
);
