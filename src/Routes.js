import React from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/reh-1meeting-app' component={HomePage} />
        <Route exact path='/reh-1meeting-app/profile' component={ProfilePage} />
        <Route exact path='/reh-1meeting-app/register' component={RegisterPage} />
        <Route
          render={function() {
            return <h1>Page Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
