import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from '../Router';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Chatbox from '../Chatbox';

const AppView = () => (
  <BrowserRouter>
    <>
      <Header />
      <Navbar />
      <Router />
      {/* <Chatbox /> */}
      <Footer />
    </>
  </BrowserRouter>
);

export default AppView;
