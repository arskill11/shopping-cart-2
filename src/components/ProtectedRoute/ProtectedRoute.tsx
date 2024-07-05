import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  const isAuthorized: boolean = useSelector(
    (state: RootState) => state.auth.isAuthorized,
  );

  if (!isAuthorized) {
    return <Navigate to={'/'} />;
  }

  return children;
};
