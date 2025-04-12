export type AuthState = {
  token: string | null;
  loading: boolean;
  user: User | null;
};

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
