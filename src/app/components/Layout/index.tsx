import React from "react";
import Login from "../LogIn";

// components
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = () => (
  <React.Fragment>
    <Header />
      <Login />
      {/* <div>{children}</div> */}
    <Footer />
  </React.Fragment>
);

export default Layout;
