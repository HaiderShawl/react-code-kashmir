import React, { Component } from 'react';

import Header from "./components/Header"
import Footer from "./components/Footer";
import Home from "./components/Home";
import Learn from "./components/Learn";

import WebDev from "./components/learn/WebDev";


import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/learn" component={Learn} />
        <Route path="/web-development" component={WebDev} />
      </Switch>
    <Footer />
    </div>
  );
}

export default App;
