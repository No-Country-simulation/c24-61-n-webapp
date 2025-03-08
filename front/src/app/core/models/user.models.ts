export interface User {
    id: string;
    username: string;
    email: string;
  }

  export interface AuthResponse {
    jwt: string;
  }

  export interface UserLoginData {
    email: string;
    password: string;
  }

