import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from '../../services/api/auth';
function PublicRoute({ children, restricted = false, redirectTo = '/' }) {
  const isLoggedIn = useSelector(state => loginUser(state));
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

PublicRoute.prototype = {
  children: propTypes.element,
  restricted: propTypes.bool,
  redirectTo: propTypes.string,
};

export default PublicRoute;