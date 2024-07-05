import { CartData } from '../types/types';

export function checkDuplication(array: CartData[], product: CartData) {
  const filtered = array.filter((item) => item.id !== product.id);

  if (array.length > filtered.length) {
    return true;
  } else {
    return false;
  }
}
