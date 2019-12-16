import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';
import { Login } from './Login/Login';
import { LogOutButton } from './LogOutButton/LogOutButton';
import { MembersArea } from './MembersArea/MembersArea';
import Register from './Register/Register';
import { Search } from './Search/Search';
import {SearchOrderFee} from './Search/SearchOrderFee'

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
            <Link style={{ margin: "20px" }} to="/searchCity" >Search City</Link>
            <Link style={{ margin: "20px" }} to="/orderSearchFee" >Search Order Fee</Link>

            <LogOutButton />
          </Navbar>
          <Switch>
            <Route path="/orderSearchFee">
              <SearchOrderFee />
            </Route>
            <Route path="/searchCity">
              <Search />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
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
