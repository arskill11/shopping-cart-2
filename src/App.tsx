import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { CartData } from './shared/types/types';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  const [cartProducts, setCartProducts] = useState<CartData[]>([]);
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
