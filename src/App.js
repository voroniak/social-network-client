import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import Home from "./Home/Home";
import LogInForm from "./Auth/LogInForm";
import UserProfile from "./UserFrofile/UserFrofile"
import './App.css';


const App = () => (
  <div className="App">
    <HeaderContainer/>
   <Router>
      <div className="mainContent">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path ="/LogIn" component = {LogInForm}/>
        <Route path ="/UserPage/:userId" component = {UserProfile}/>
        </Switch>
      </div>
    </Router>
  </div>
);
export default App;