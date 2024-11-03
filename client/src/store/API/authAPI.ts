import { api } from "./api";
import { IUserGet, IUserSent } from "./types/IAuthApiTypes";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IUserGet, IUserSent>({
      query: (user) => ({
        url: `/user/login`,
        method: "POST",
        body: user,
      }),
    }),
    register: builder.mutation<IUserGet, IUserSent>({
      query: (user) => ({
        url: `/user/register`,
        method: "POST",
        body: user,
      }),
    }),
    current: builder.query<IUserGet, void>({
      query: () => ({
        url: `/user/current`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useCurrentQuery, useRegisterMutation } =
  authApi;

export const {
  endpoints: { login, register, current },
} = authApi;
