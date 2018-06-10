/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import { Switch, Route, Link } from 'react-router-dom';
import NotFound from './components/notFound';
import ListUsers from './listUsers';

const Home = () => (
  <div><h1> Welcome to React </h1></div>
);

const App = () => (
  <div>
    <nav>
    {/* <img className="logo" src="../public/images/logo.png" /> */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/users" component={ListUsers}/>
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
