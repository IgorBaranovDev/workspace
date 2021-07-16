import React from "react";
import { Switch, Route } from "react-router-dom";

// import fire from "../base";
// import LogIn from "./components/LogIn";

// component
import Layout from "./components/Layout";
import Login from "./components/LogIn";

// material-ui
import { CssBaseline } from "@material-ui/core";

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <CssBaseline />

      <Layout>
        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
            <div>HOME</div>
          </Route>
          <Route path="/auth">
            <Login />
          </Route>
        </Switch>
      </Layout>
    </React.Fragment>
  );
};

export default App;
