import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>{/* <Route exact path="/" component={} /> */}</Switch>
      <Footer />
    </div>
  );
}

export default App;
