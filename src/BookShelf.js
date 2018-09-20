import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {
	render() {
		return (
			<div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                	// *** used udacity study jam 21/07 by maeva nap for syntax and explanation of following code
                	this.props.books.filter(book => book.shelf === this.props.bookShelfName).map(book => (
                		<li key={book.id}>
                			<Book book={book}/>
                		</li>
                	))
                	// ***
                }
                </ol>
              </div>
            </div>
		)
	}
}

export default BookShelf