import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { curren_user } from '../actions/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
      curren_user()
       .then(response => setUser(response))
       .catch((err) => console.log(err))
  });

  return <Route
        {...rest}
        render={props =>
            user ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: props.location }
                    }}
                />
            )
        }
    ></Route>
};

export default PrivateRoute;
