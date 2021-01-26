import React from "react";
import Header from "./Header";
import Body from "./Body";
import Checkout from "./Checkout"
import {BrowserRouter as Router , Switch , Route } from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className= "app">
          <Switch>
          <Route path="/cart">
              <Header />
              <Checkout />
            </Route>
            
            <Route path="/">
              <Header />
              <Body />
            </Route>
          </Switch>
          
        </div>
      </Router>
    )
  }
};

export default App; 