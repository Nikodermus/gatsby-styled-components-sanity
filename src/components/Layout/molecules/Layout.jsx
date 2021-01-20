import React from 'react';
import PropTypes from 'prop-types';

import BaseStyle from '../atoms/BaseStyle';
import Footer from '../atoms/Footer';
import Nav from '../atoms/Nav';

import 'normalize.css';

const Layout = ({ children }) => (
    <>
        <BaseStyle />
        <Nav />
        <main>{children}</main>
        <Footer></Footer>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
