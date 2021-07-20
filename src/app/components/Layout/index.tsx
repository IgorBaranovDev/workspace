import React from "react";

// components
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = ({children}) => (
  <React.Fragment>
    <Header />      
      <div>{children}</div>
    <Footer />
  </React.Fragment>
);

export default Layout;
