import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "@/types/sliceTypes/authSliceTypes";

import { loginService, registerService } from "@/services/authService";

const initialState: AuthState = {
  token: null,
  loading: false,
  user: null,
};
const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.token = null;
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.token = action.payload.token;
        state.user = action.payload.user;
      }
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
      state.token = null;
    });
  },
});

export const login = createAsyncThunk("auth/login", async (email: string) => {
  try {
    const res = await loginService(email);

    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err);
  }
});

export const register = createAsyncThunk("auth/register", async (email: string) => {
  try {
    const res = await registerService(email);
    return res;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err);
  }
});

export default authorSlice.reducer;
