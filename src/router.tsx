import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Cart } from './pages/Cart/';
import { Homepage } from './pages/Home/';
import { Product } from './pages/Product/';
import { ShopPage } from './pages/Shop/';
import { ErrorNotFound } from './pages/ErrorNotFound/';
import { Cards } from './components/ShopPageCardList/';
import { LogIn } from './pages/LogIn/';
import { SignUp } from './pages/SignUp/';
import { ProtectedRoute } from './components/ProtectedRoute/';
import { Profile } from './pages/Profile/';

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
      {
        path: 'cart',
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      { path: 'auth/login', element: <LogIn /> },
      { path: 'auth/signup', element: <SignUp /> },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
