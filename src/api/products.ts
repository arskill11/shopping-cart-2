const API_URL = 'https://api.escuelajs.co/api/v1';
const HOMEPAGE_PRODUCTS_LIMIT = 4;
const SHOPPAGE_PRODUCTS_LIMIT = 40;
const PRODUCTS_OFFSET = 0;

export function getProducts() {
  return fetch(
    `${API_URL}/products?offset=${PRODUCTS_OFFSET}&limit=${SHOPPAGE_PRODUCTS_LIMIT}`,
  );
}

export function getProductsByCategory(id: string) {
  return fetch(`${API_URL}/categories/${id}/products`);
}

export function getProductsById(id: string) {
  return fetch(`${API_URL}/products/${id}`);
}

export function getLimitedProducts() {
  return fetch(
    `${API_URL}/products?offset=${PRODUCTS_OFFSET}&limit=${HOMEPAGE_PRODUCTS_LIMIT}`,
  );
}

export function getCategoriesOfProducts() {
  return fetch(`${API_URL}/categories`);
}
