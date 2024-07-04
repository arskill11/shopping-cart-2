import { CartData } from '../types/types';

function checkDuplication(array: CartData[], product: CartData) {
  const filtered = array.filter((item) => item.id !== product.id);

  if (array.length > filtered.length) {
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
}

export { checkDuplication };
