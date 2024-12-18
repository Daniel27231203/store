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

// posts
type User = {
  id: number;
  username: string;
  role: "USER" | "ADMIN"; // если роли могут быть разные, добавьте варианты здесь
  email: string;
  isActive: boolean;
  photo: string;
  createdAt: string; // можно использовать Date, если планируется преобразование
  updatedAt: string;
};

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  createdAt: string; // можно заменить на Date, если требуется
  updatedAt: string;
  salePrice: number;
  rating: number;
  user: User;
};

interface IProfile {
  username: string;
  photo: string;
}

interface ICreateProduct {
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

interface ICreateProductResponse {
  id: number;
  userId: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductProps {
  photo: string;
  title: string;
  price: number;
  type: string;
  salePrice?: number;
  rating: number;
  id: number;
  user: User;
}

interface BasketProduct {
  id: number;
  title: string;
  price: number;
  salePrice?: number;
  photo: string;
  quantity: number;
}
