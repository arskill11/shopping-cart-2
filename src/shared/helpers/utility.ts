import { CartData } from '../types/types';

function checkDuplication(array: CartData[], product: CartData) {
  const filtered = array.filter((item) => item.id !== product.id);

  if (filtered.length === array.length) return false;
  else return true;
}

export { checkDuplication };
