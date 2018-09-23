import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class ListBooks extends Component {
	render() {
		console.log(this.props.books);
		return (
			<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf books={this.props.books} bookShelfName="currentlyReading" bookShelfTitle="Currently Reading" moveBookToShelf={this.props.moveBookToShelf} />
                <BookShelf books={this.props.books} bookShelfName="wantToRead" bookShelfTitle="Want to Read" moveBookToShelf={this.props.moveBookToShelf} />
                <BookShelf books={this.props.books} bookShelfName="read" bookShelfTitle="Read" moveBookToShelf={this.props.moveBookToShelf} />
              </div>
            </div>      
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
		)
	}
}

export default ListBooks