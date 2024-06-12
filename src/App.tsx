import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { useState } from 'react';
import { CartProps } from './types';

function App() {
  const [cartProducts, setCartProducts] = useState<CartProps[]>([]);
  console.log(cartProducts);

  return (
    <div>
      <Navbar cartProducts={cartProducts} />
      <Outlet context={[cartProducts, setCartProducts]} />
      <Footer />
    </div>
  );
}

export default App;
