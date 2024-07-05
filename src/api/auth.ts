const API_URL = 'https://api.escuelajs.co/api/v1/users/';

export function createUser(name: string, email: string, password: string) {
  const userInfo = fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      avatar: 'https://picsum.photos/800',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  userInfo
    .then((response) => response.json())
    .then((json) => console.log(json));
}
