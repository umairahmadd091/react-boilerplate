import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authDetails: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
