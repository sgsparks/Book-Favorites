import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/NavBar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/searchBooksPage/SearchBooksPage';
export const App = ()=> {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <SearchBooksPage/>
      <Footer />
    </div>
  );
}
