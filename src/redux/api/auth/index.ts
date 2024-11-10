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
    signIn: build.mutation<AUTH.GetSingInResponse, AUTH.GetSingInRequest>({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    getMe: build.query<AUTH.GetMeResponse, AUTH.GetMeRequest>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["me"],
    }),
    refresh: build.mutation<SingUpResponse, { refresh: string }>({
      query: (refresh) => ({
        url: "/auth/user",
        method: "PATCH",
        body: refresh,
      }),
      invalidatesTags: ["auth"],
    }),
    getProfile: build.mutation<AUTH.GetProfileResponse, AUTH.GetProfileRequest>(
      {
        query: (data) => ({
          url: "/auth/update-profile",
          method: "PATCH",
          body: data,
        }),
        invalidatesTags: ["me"],
      }
    ),
    logOut: build.mutation<AUTH.logOutResponse, AUTH.logOutRequest>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["me"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useForgotMutation,
  useResetMutation,
  useGetProfileMutation,
  useSignInMutation,
  useGetMeQuery,
  useRefreshMutation,
  useLogOutMutation,
} = api;
