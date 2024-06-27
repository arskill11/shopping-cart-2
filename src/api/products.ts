const API_URL = 'https://fakestoreapi.com/products';
const HOMEPAGE_PRODUCTS_LIMIT = 4;

export function getProducts() {
  return fetch(`${API_URL}/`);
}

export function getProductsByCategory(category: string) {
  return fetch(`${API_URL}/category/${category}`);
}

export function getProductsById(id: string) {
  return fetch(`${API_URL}/${id}`);
}

export function getLimitedProducts() {
  return fetch(`${API_URL}?limit=${HOMEPAGE_PRODUCTS_LIMIT}`);
}
