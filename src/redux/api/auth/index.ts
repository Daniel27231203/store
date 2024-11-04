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
  }),
});

export const { useSignUpMutation } = api;
