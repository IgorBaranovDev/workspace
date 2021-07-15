import React from 'react';

// components
import Footer from './Footer';
import Header from './Header';


const Layout: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Header />
                    
            <Footer />
        </React.Fragment>
    )
}

export default Layout;