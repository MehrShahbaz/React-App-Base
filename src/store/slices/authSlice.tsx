import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../types/sliceTypes/authSliceTypes";

// import {
//   getAllAuthorService,
//   getAuthorBySlugService,
// } from "services/authorService";

const initialState: AuthState = {
  token: null,
  loading: false,
};
const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
  extraReducers: () => {
    //builder as parameter
    // builder.addCase(login.pending, (state, _action) => {
    //   state.token = null;
    //   state.loading = true;
    // });
    // builder.addCase(login.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.token = action.payload;
    // });
    // builder.addCase(login.rejected, (state, _action) => {
    //   state.loading = false;
    //   state.token = null;
    // });
  },
});

export const login = createAsyncThunk("auth/login", async () => {
  try {
    await console.log("login");

    return { token: null };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err);
  }
});

export const register = createAsyncThunk("auth/register", async () => {
  try {
    await console.log("register");
    return {};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err);
  }
});

export default authorSlice.reducer;
