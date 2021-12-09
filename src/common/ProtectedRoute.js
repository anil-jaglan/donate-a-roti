import React from 'react';
import { Route, Redirect } from "react-router-dom";
  
  
const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
      {...rest}
      render={props =>        
        authenticated ? (
          <Component {...rest} {...props} />
        ) : (
          <Component {...rest} {...props} />
        )
      }
    />
);
  
export default ProtectedRoute