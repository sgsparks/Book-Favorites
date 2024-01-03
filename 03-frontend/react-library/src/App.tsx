import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/NavBar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/searchBooksPage/SearchBooksPage';
import { Redirect, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckOutPage';
export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route path='/search'>
          <SearchBooksPage />
        </Route>
        <Route path='/checkout/:bookId'>
          <BookCheckoutPage />
        </Route>
      </Switch>
      </div>

      <Footer />
    </div>
  );
}
