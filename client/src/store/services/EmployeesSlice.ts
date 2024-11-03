import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./types/IEmployeesTypes";
import { employeesApi } from "../API/employeesApi";
import { RootState } from "../store";

const initialState: IInitialState = {
  employees: null,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      employeesApi.endpoints.getAllEmployees.matchFulfilled,
      (state, action) => {
        state.employees = action.payload
      }
    );
  },
});

export default employeeSlice.reducer;

export const selectEmployees = (state:RootState)=>state.employees;
