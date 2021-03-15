import React from 'react';
import { curren_user } from '../../actions/auth';
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [user, setUser] = React.useState();
  const history = useHistory();

  React.useEffect(() => {
      curren_user()
       .then(response => setUser(response))
       .catch((err) => console.log(err))
  });

  const _handleSignInClick = () => {
    window.open("http://localhost:8000/api/auth/google", "_self");
  }
  return <React.Fragment>
            {!user?<button onClick={_handleSignInClick}>Login with Google</button>:history.push("/dashboard")}
         </React.Fragment>
}

export default SignIn;
