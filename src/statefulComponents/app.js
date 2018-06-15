import React from 'react'; // eslint-disable-line no-unused-vars
import { Switch, Route, Link } from 'react-router-dom';
import NotFound from '../statelessComponents/notFound';
import ListUsers from './listUsers';
import UserDetails from './userDetails';
import Nav from '../statelessComponents/nav';

// Declare the routes and associated components using React Router
const App = () => (
  <div>
     <Nav>
      <ul className="nav navbar-nav">
        <li><Link to="/">Home</Link></li>
      </ul>
    </Nav>
    <Switch>
      <Route exact path="/" component={ListUsers}/>
      <Route path="/user/:userId" render={props => <UserDetails {...props} />}/>
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
