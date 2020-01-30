import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./page/Home";
import DogPageByid from "./page/DogPageByid";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dog/:id" component={DogPageByid} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
