import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './Users.jsx'
import Home from './Home'


const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <ul className="navigation">
          <li className="navigation__item">
            <a href="/">Home</a>
          </li>
          <li className="navigation__item">
            <a href="/users">Users</a>
          </li>
        </ul>
        <Route path="/users">
          <Users />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </BrowserRouter>
  );
  
}

export default App