import { createApi} from "@reduxjs/toolkit/query/react";
import { baseQueryWithRetry } from "./base";


export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
