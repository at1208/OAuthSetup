import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateRoute from '../layouts/private';
import SignIn from '../pages/auth/SignIn';
import Dashboard from '../pages/dashboard';


const Routes = () => {
  return (
     <BrowserRouter>
       <Switch>
          <Route path='/' exact component={SignIn} />
          <Route  path="/dashboard" exact component={Dashboard} />
       </Switch>
     </BrowserRouter>
  )
}

export default Routes;
