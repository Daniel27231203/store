namespace AUTH {
  type GetSingUpResponse = SingUpResponse;
  type GetSingUpRequest = SingUpUser;

  type ForgotResponse = string;
  type ForgotRequest = ForgotPasswordResponse;

  type RessetRequest = RessetPassword;

  type GetSingInResponse = ForgotPasswordResponse;
  type GetSingInRequest = {
    email: string;
    password: string;
  };

  type GetMeResponse = ApiResponse;
  type GetMeRequest = void;

  type GetProfileResponse = string;
  type GetProfileRequest = IProfile;
}
