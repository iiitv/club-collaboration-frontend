import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./main-page/navbar/main navbar/navbar";
import "./index.css";
import Home from "./main-page/home";
import Clubmainpage from "./component/clubs/club-main-page/club-main-page";
import Login from "./component/clubs/login/login";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/club/:clubname" component={Clubmainpage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
