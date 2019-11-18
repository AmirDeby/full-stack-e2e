import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';
import { Login } from './Login/Login';
import Register from './Register/Register';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Link style={{margin:"20px"}} to="/home" >Home</Link>
          <Link style={{ margin: "20px" }} to="/register" >Register</Link>
          <Link style={{ margin: "20px" }} to="/login" >Login</Link>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
