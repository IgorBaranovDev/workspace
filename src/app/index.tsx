import React from "react";
import { Switch, Route } from "react-router-dom";

// component
import Layout from "./components/Layout";
import Login from "./components/LogIn";
import Home from "./components/Home";
import Office from "./components/Office";

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Login} path="/auth" />
        <Route component={Office} path="/office/:officeId" />
   
        {/* href="/floors/address_id-1"текст ссылки - имя поля в city */}
      </Switch>
    </Layout>
  );
};

export default App;
