import React from "react";
import { Switch, 
  //  Redirect,
    Route } from "react-router-dom";

// component
import Layout from "./components/Layout";

import Login from "./components/LogIn";
import Home from "./components/Home";
// import { useSelector } from "react-redux";
// import { getAuthUser } from "./redux/selectors";

const App: React.FunctionComponent = () => {
  // const user = useSelector(getAuthUser);
  return (
    <Layout>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Login} path="/auth" />
        {/* <Route exact path="/">
          {user ? <Redirect to="/auth" /> : <Home />}
        </Route> */}
      </Switch>
    </Layout>
  );
};

export default App;
