import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import Home from "./Home/Home";
import './App.css';


const App = () => (
  <div className="App">
    <HeaderContainer/>
   <Router>
      <div className="mainContent">
        <Switch>
        <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </div>
);
export default App;