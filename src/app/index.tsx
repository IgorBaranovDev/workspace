import React from "react";

// material-ui
import { CssBaseline } from "@material-ui/core";

// component
import Layout from "./components/Layout";

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Layout />
    </React.Fragment>
  );
};

export default App;
