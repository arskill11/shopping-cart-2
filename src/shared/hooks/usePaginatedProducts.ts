import { useState } from 'react';
import { PRODUCTS_PER_PAGE } from '../constants/constants';
import { ProductData } from '../types/types';

type usePaginatedProductsType = (
  products: ProductData[],
  search: string,
) => [ProductData[], (offset: number) => void, number];

const usePaginatedProducts: usePaginatedProductsType = (products, search) => {
  const [productsOffset, setProductOffset] = useState(0);
  const endOffset = productsOffset + PRODUCTS_PER_PAGE;
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search);
  });
  const currentProducts = filteredProducts.slice(productsOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  return [currentProducts, setProductOffset, pageCount];
};

export default usePaginatedProducts;
