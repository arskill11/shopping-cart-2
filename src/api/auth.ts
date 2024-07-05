const API_USERS_URL = 'https://api.escuelajs.co/api/v1/users/';
const API_AUTH_URL = 'https://api.escuelajs.co/api/v1/auth';

interface SignUp {
  name: string;
  email: string;
  password: string;
}

interface LogIn {
  email: string;
  password: string;
}

interface UpdateUser {
  id: number;
  property: string;
  value: string;
}

export function createUser({ name, email, password }: SignUp) {
  return fetch(API_USERS_URL, {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      avatar:
        'https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
}

export function logIn({ email, password }: LogIn) {
  return fetch(`${API_AUTH_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
}

export function getUserWithSession(access_token: string) {
  return fetch(`${API_AUTH_URL}/profile`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  }).then((response) => response.json());
}

export function updateUser({ id, property, value }: UpdateUser) {
  return fetch(`${API_USERS_URL}${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      [property]: value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
}
