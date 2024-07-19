import { CartData } from '../types/types';

export function checkDuplication(array: CartData[], product: CartData) {
  const filtered = array.filter((item) => item.id !== product.id);

  if (array.length > filtered.length) {
    return true;
  } else {
    return false;
  }
}

export function reduceTitle(title: string) {
  if (title.split(' ').length > 10) {
    const unwantedCharsQuantity = title.split(' ').length - 10;
    const newTitle = title.split(' ').slice(unwantedCharsQuantity).join(' ');
    title = newTitle;
  }

  return title;
}
