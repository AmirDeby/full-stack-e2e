import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';
import { Login } from './Login/Login';
import Register from './Register/Register';
import Navbar from 'react-bootstrap/Navbar'
import { MembersArea } from './MembersArea/MembersArea';
import Button from 'react-bootstrap/Button';
import { LogOutButton} from './LogOutButton/LogOutButton'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
    
        <BrowserRouter>
          <Navbar bg="dark">
            <Link style={{ margin: "20px" }} to="/home" >Home</Link>
            <Link style={{ margin: "20px" }} to="/register" >Register</Link>
            <Link style={{ margin: "20px" }} to="/login" >Login</Link>
            <Link style={{ margin: "20px" }} to="/MembersArea" >Members Only</Link>
            <LogOutButton/>
          </Navbar>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/MembersArea">
              <MembersArea />
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
