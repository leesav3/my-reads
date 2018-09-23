import React from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchPage from './SearchPage';
import BookInfo from './BookInfo';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    })
  }

  moveBookToShelf= (book, shelf) => {
    // wrapped this code in a promise to make sure it updates each time
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks();
      // if we are moving a book to shelf from the search page, display the listbooks page
      if (window.location.pathname.indexOf("/search") > -1) {
        window.location = "/";
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchPage books={this.state.books} moveBookToShelf={this.moveBookToShelf}/>
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} moveBookToShelf={this.moveBookToShelf}/>
        )}/>
        <Route exact path="/info" component={BookInfo}/>
      </div>
    )
  }
}

export default BooksApp
