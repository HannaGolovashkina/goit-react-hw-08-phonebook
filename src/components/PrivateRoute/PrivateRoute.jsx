import propTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loginUser } from '../../services/api/auth';

function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(state => loginUser(state));

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}

PrivateRoute.prototype = {
  children: propTypes.element,
  redirectTo: propTypes.string,
};

export default PrivateRoute;