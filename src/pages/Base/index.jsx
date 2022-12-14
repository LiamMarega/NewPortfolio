import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function BasePages(props) {
  return (
    <div className="ContainerBasePages">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default BasePages;
