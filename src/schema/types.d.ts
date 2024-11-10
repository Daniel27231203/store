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
interface Profile {
  id: string;
  username: string;
  role: string;
  email: string;
  isActive: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  profile: Profile;
}

interface IProfile{
  username: string
  photo: string
}