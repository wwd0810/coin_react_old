import React from "react";
import { Switch, withRouter } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { withCookies } from "react-cookie";

import HomePage from "pages/home/HomePage";
import SellingPage from "pages/selling/SellingPage";
import BuyingPage from "pages/buying/BuyingPage";
import PresentPage from "pages/present/PresentPage";

function App() {
  return (
    <Router>
      <Helmet>Cash Link</Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/selling" component={SellingPage} />
        <Route exact path="/buying" component={BuyingPage} />
        <Route exact path="/present" component={PresentPage} />
      </Switch>
    </Router>
  );
}

export default withCookies(withRouter(App));
