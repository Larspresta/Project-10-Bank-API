import { Navigate } from 'react-router-dom';
import { getToken } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(getToken);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
