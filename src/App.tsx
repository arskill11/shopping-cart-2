import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { getAccessTokenFromLocalStorage } from './shared/helpers/utility';
import { authorize, saveTokens } from './store/auth/auth.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';

function App() {
  const access_token = getAccessTokenFromLocalStorage();
  const dispatch = useDispatch<AppDispatch>();

  if (access_token !== null && access_token.length >= 1) {
    dispatch(authorize());
    dispatch(saveTokens({ access_token: access_token, refresh_token: '' }));
  }

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
