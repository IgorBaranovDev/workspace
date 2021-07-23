import React from "react";

// components
import Footer from "./Footer";
import Header from "./Header";
import WrapperChildren from "./WrapperChildren";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <WrapperChildren>{children}</WrapperChildren>
    <Footer />
  </>
);

export default Layout;
