import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { CartData } from './shared/types/types';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
