import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';
import Homepage from './components/Homepage.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShopPage from './components/ShopPage.tsx';
import Product from './components/Product.tsx';
import Cards from './components/ShopPageCards.tsx';
import Cart from './components/Cart.tsx';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

// const AppWrapper = styled.div`
//   background: lightgray;
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
// `;

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
