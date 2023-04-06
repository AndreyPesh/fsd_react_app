import { Navigate } from 'react-router-dom';
import { Links } from '../types/enum';
import useAuth from '2_processes/auth/hooks/useAuth';

interface PublicRouteProps {
  children: JSX.Element;
}

const publicRoute = ({ children }: PublicRouteProps): JSX.Element => {
  const isAuth = useAuth();
  if (isAuth) {
    return <Navigate to={Links.main} replace />;
  }
  return children;
};

export default publicRoute;