import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Cart } from './pages/Cart/';
import { Homepage } from './pages/Homepage/';
import { Product } from './pages/Product/';
import { ShopPage } from './pages/ShopPage/';
import { ErrorNotFound } from './pages/ErrorNotFound/';
import { Cards } from './components/ShopPageCardList/';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorNotFound />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: 'shop',
        element: <ShopPage />,
        children: [
          { index: true, element: <Cards /> },
          { path: 'category/:category', element: <Cards /> },
        ],
      },
      { path: 'product/:id', element: <Product /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
