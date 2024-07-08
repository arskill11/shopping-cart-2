import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Navigate } from 'react-router-dom';
import { Props } from './types';

export const ProtectedRoute = ({ children }: Props) => {
  const isAuthorized: boolean = useSelector(
    (state: RootState) => state.auth.isAuthorized,
  );

  if (!isAuthorized) {
    return <Navigate to={'/'} />;
  }

  return children;
};
