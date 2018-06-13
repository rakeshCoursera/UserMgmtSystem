/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import { Switch, Route, Link } from 'react-router-dom';
import NotFound from '../statelessComponents/notFound';
import ListUsers from './listUsers';
import Nav from './nav';

const Home = () => (
  <div className="text-center"><h1> Welcome to React </h1></div>
);

const App = () => (
  <div>
     <Nav>
      <ul className="nav navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </Nav>
    <Switch>
      <Route exact path="/" component={ListUsers}/>
      <Route exact path="/users" component={Home}/>
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
