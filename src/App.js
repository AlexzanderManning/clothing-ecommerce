import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import ProductPage from "./pages/product-page/product-page.component";
import "./App.scss";

const App = ({ currentUser }) => {
  return (
    <div className="main-wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path={"/products"} component={ProductPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(App));
