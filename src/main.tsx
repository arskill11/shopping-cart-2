import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Cart } from './components/Cart/';
import { Homepage } from './components/Homepage/';
import { Product } from './components/Product/';
import { ShopPage } from './components/ShopPage/';
import Cards from './components/ShopPageCardList/ShopPageCardList.tsx';

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
    children: [
      { path: '', element: <Homepage /> },
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
