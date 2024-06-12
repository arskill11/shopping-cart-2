import { CartProps } from './types';

function checkDuplication(array: CartProps[], product: CartProps) {
  const filtered = array.filter((item) => item.id !== product.id);

  if (filtered.length === array.length) return false;
  else return true;
}

export { checkDuplication };
