interface SingUpUser {
  email: string;
  password: string;
  username: string;
  photo: string;
}

interface SingUpResponse {
  message: string;
  accessToken: string;
  accessTokenExpiration: string;
  refreshToken: string;
}
interface IProfile {
  profile: {
    id: string
    username: string
    role: string
    email: string
    isActive: string
    photo: string
    createdAt: string
    updatedAt: string
  }
}
