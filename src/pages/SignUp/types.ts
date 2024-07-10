export interface NewUser {
  email: string;
  password: string;
  name: string;
  avatar: string;
  role: string;
  id: number;
}

export interface SignupFormFields {
  name: string;
  email: string;
  password: string;
}
