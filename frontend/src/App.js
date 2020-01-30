import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./page/Home";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
