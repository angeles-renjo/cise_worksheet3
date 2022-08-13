import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/ShowBookDetails'
import './components/ShowBookList'


import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element = {<ShowBookList />} />
          <Route exact path="/create-book"  element = {<CreateBook />} />
          <Route exact path="/edit-book/:id"  element = {<UpdateBookInfo />} />
          <Route exact path="/show-book/:id"  element = {<ShowBookDetails />} />
      </Routes >
      </BrowserRouter>
    );
  }
}

export default App;
