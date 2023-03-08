import React from "react";
import { Route, Redirect, Switch, BrowserRouter, Router } from "react-router-dom";
import signIn from "./Pages/SignIn";
import DashboardPage from "./Pages/dashboard";




const App = () => {

    return (
            <BrowserRouter>
                <Switch>
                  <Redirect exact from="/" to="/login" />
                  <Route
                      exact
                      path="/login"
                      component={signIn}
                  />
                  <Route
                      exact
                      path="/dashboard"
                      component={DashboardPage}
                  />
                </Switch>
            </BrowserRouter>
    );
};


export default App;
