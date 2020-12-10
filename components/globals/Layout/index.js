import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <>
        {children}
      </>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout;
