import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Component imports
import { AuthContext } from './AuthContext';

/**
 * Provides authentication checking for Routes.
 * @param {object} component - The Component to render if authenticated
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthContext.Consumer>
      {context => (
        <Route
          {...rest}
          render={props =>
            context.state.isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to={'/signin'} />
            )
          }
        />
      )}
    </AuthContext.Consumer>
  );
};

export default PrivateRoute;
