import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<AUTH.GetSingUpResponse, AUTH.GetSingUpRequest>({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    forgot: build.mutation<AUTH.ForgotResponse, AUTH.ForgotRequest>({
      query: (data) => ({
        url: "/auth/forgot",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    reset: build.mutation<AUTH.ForgotResponse, AUTH.RessetRequest>({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useSignUpMutation, useForgotMutation, useResetMutation } = api;
