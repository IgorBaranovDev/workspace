import React from "react";

// component
import Layout from "./components/Layout";

// material-ui
import { CssBaseline } from "@material-ui/core";


const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Layout />
    </React.Fragment>
  );
};

export default App;
