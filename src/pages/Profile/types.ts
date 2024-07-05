export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

export interface EditMode {
  name: boolean;
  email: boolean;
  password: boolean;
  avatar: boolean;
}
