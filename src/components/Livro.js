import React, { Component } from "react";
import "../App.css";

export default class Livros extends Component {
  updateBook(shelf) {
    this.props.MoveBook(this.props.book, shelf);
  }

  render() {
    const { book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: `url(${
                  this.props.book.imageLinks
                    ? this.props.book.imageLinks.thumbnail
                    : "not-found.jpg"
                })`
              }}
            />
            <div className="book-shelf-changer">
              <select
                value={book.shelf}
                onChange={e => this.updateBook(e.target.value)}
              >
                <option value="none" disabled>
                  Mover para...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    );
  }
}
