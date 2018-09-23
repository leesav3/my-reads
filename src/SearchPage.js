import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book'

class SearchPage extends Component {
  state = {
    query: '',
    matchedBooks: []

  }

  updateQuery = (query) => {
    this.setState({ query: query })
    this.getMatchedBooks(query);
  }

  getMatchedBooks = (query) => {
    if (query) {
      console.log(query);
      BooksAPI.search(query).then((matchedBooks) => {
        // if you type something that doesn't exist, a mapping error occurs. use an empty array instead
        if (matchedBooks.error) {
          this.setState({matchedBooks: []});
        } else {
          this.setState({ matchedBooks: matchedBooks }); 
        }
      })
    } else {
      this.setState({ matchedBooks: []});
    }
  }

	render() {
		return (
			<div className="search-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          
           {
            
            this.state.matchedBooks.map(matchedBook => {
              let shelf = 'none';
              this.props.books.map(book => (book.id === matchedBook.id) ?
                  shelf = book.shelf : '');
              return (
                <li key={matchedBook.id}>
                  <Book book={matchedBook} moveBookToShelf={this.props.moveBookToShelf} bookShelfName={shelf}/>
                </li>
              );
              
            })
            
          }
          </ol>
        </div>
      </div>
		)
	}
}

export default SearchPage