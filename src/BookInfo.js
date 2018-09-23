import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookInfo extends Component {
	
	render() {
		 const { book } = this.props.location.state;
		 console.log(book.title);
		return (
			<div>
				<div className="list-books-title">
	          		<h1>MyReads</h1>
	        	</div>
          		<div className="info-books-bar">
		          <Link to="/" className="close-search">Close</Link>
		          <div className="info-books-wrapper">
		            <div>Book Information</div>
		          </div>
		        </div>
        		<div className="bookshelf">
	        		<div className="book-top">
	                	<div className="book-info-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
	                </div>
	                <div>
	             		<div className="book-title">{book.title}</div>
				        <div className="book-info-authors">{book.authors.join(", ")}</div> 
				        <div className="book-info-pages">{book.pageCount} Pages</div>
				        <div className="book-info-description"><b>Description: </b>{book.description}</div> 
				    </div> 
     			</div>
     		</div>
		)
	}
}

export default BookInfo

