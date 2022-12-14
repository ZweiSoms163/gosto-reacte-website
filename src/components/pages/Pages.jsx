import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from '../common/Footer';
import { Header } from '../common/Header';
import { Details } from '../home/details/Details';
import { Home } from '../home/Home';

const Pages = ({ cartItems }) => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home cartItems={cartItems} />
          </Route>
          <Route exact path="/cart/:id">
            <Details />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
