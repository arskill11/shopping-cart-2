import { CartData } from '../types/types';

export function checkDuplication(array: CartData[], product: CartData) {
  const filtered = array.filter((item) => item.id !== product.id);

  if (array.length > filtered.length) {
    return true;
  } else {
    return false;
  }
}

export function getAccessTokenFromLocalStorage() {
  let result: string | null = null;

  const storedToken = localStorage.getItem('access_token');
  storedToken && (result = JSON.parse(storedToken));

  return result;
}

export function setAccessTokenToLocalStorage(access_token: string) {
  localStorage.setItem('access_token', JSON.stringify(access_token));
}

export function removeAccessTokenFromLocalStorage() {
  localStorage.removeItem('access_token');
}
