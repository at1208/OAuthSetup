import React from 'react';
import { current_user } from '../../actions/auth';

const Dashboard = ( ) => {
   const [user, setUser] = React.useState();

   React.useEffect(() => {
       current_user()
        .then(response => setUser(response))
        .catch((err) => console.log(err))
   }, []);

   const _handleLogoutInClick = () => {
     window.open("http://localhost:8000/api/auth/logout", "_self");
   }

  return <React.Fragment>
              {user && <div>
                <h6>Name: {user.name}</h6>
                <h6>Email: {user.email}</h6>
                <button onClick={_handleLogoutInClick}>Logout</button>
              </div>}
         </React.Fragment>
}

export default Dashboard;
