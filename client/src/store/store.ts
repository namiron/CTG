import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./services/authSlice";
import employeeSlice from "./services/EmployeesSlice";
import { api } from "./API/api";
import { listenerMiddleware } from "../middleware/auth";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
    employees: employeeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
