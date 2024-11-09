interface SingUpUser {
  email: string;
  password: string;
  username: string;
  photo: string;
}

interface SingUpResponse {
  message?: string;
  accessToken: string;
  accessTokenExpiration: string;
  refreshToken: string;
}


interface ForgotPasswordResponse {
  email: string;
  frontEndUrl: string;
}

interface RessetPassword {
  token: string;
  newPassword: string;

}
