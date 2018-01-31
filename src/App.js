import React, { Component } from 'react';
import './App.css';
import BookList from './containers/booklist';
import SelectBook from './containers/selectBook';




class App extends Component {
  render() {
    return (
      <div>
       <BookList />
       <SelectBook />
      </div>
    );
  }
}

export default App;
