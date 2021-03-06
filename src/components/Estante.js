import React, { Component } from "react";
import "../App.css";
import Livro from "./Livro";
import { Link } from "react-router-dom";

export default class Estante extends Component {
  state = {
    books: [],
    shelf: []
  };

  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>Meus Livros</h1>
          </div>

          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.books
                      .filter(book => book.shelf === "currentlyReading")
                      .map(book => (
                        <div key={book.id}>
                          <Livro book={book} MoveBook={this.props.MoveBook} />
                        </div>
                      ))}
                  </ol>
                </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.books
                      .filter(book => book.shelf === "wantToRead")
                      .map(book => (
                        <div key={book.id}>
                          <Livro book={book} MoveBook={this.props.MoveBook} />
                        </div>
                      ))}
                  </ol>
                </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.books
                      .filter(book => book.shelf === "read")
                      .map(book => (
                        <div key={book.id}>
                          <Livro book={book} MoveBook={this.props.MoveBook} />
                        </div>
                      ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link value={this.props.MoveBook} to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}
