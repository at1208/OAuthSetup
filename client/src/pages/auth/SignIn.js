import React from 'react';
import { current_user } from '../../actions/auth';
import { Redirect } from "react-router-dom";

const SignIn = () => {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
      current_user()
       .then(response => setUser(response))
       .catch((err) => console.log(err))
  }, []);

  const _handleSignInClick = () => {
    window.open("http://localhost:8000/api/auth/google", "_self");
  }

  if (!user) {
    return <button onClick={_handleSignInClick}>Login with Google</button>
  }
  return <Redirect to="/dashboard" />;
}

export default SignIn;
