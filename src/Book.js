// info icon from freepik.com
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Book extends Component {
	/* handleChange from
	https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
	*/
	handleChange = (event) => {
		this.props.moveBookToShelf(this.props.book, event.target.value);
	}

	render() {
		return (
			<div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''})` }}></div>
                <Link className="book-info" to={{ pathname: "/info", state: {book: this.props.book} }}></Link>
                 
                <div className="book-shelf-changer">
                  <select onChange={this.handleChange} value={this.props.bookShelfName}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(", ") : ''}</div>
            </div>
		)
	}
}

export default Book