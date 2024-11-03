import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../API/authAPI";
import { IInitialState } from "./types/IAuthTypes";
import { googleApi } from "../API/google/googleApi";

const initialState: IInitialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
        
          state.isAuthenticated = true;
        }
      )
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isAuthenticated = true;
        }
      )
      .addMatcher(
        authApi.endpoints.current.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isAuthenticated = true;
        }
      )
      .addMatcher(
        googleApi.endpoints.currentGoogle.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isAuthenticated = true;
        }
      )
      .addMatcher(
        googleApi.endpoints.logoutGoogle.matchFulfilled,
        (state) => {
          state.user = null;
          state.isAuthenticated = false;
        }
      );
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
