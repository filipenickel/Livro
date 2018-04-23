import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Livro from "./Livro";
import sortBy from "sort-by";

export default class Busca extends Component {
  state = {
    query: "",
    books: []
  };

  onChangeQuery = q => {
    let query = q.trim();
    if (q) {
      BooksAPI.search(query).then(response => {
        const emptyResponse = !!response.error; // verifica se existe a proprierdade 'error'...
        const results = emptyResponse ? [] : response; // aqui é um if ternario
        // igual a
        // if(emptyResponse === true) { results = [] }
        // else { results = response }

        results.forEach(item => {
          const myBook = this.props.myBooks.find(elem => elem.id === item.id);
          item.shelf = myBook ? myBook.shelf : "none";
        });
        console.log("RESULTS", results);
        this.setState({ books: results, query: q });
      });
    } else {
      this.setState({
        books: [],
        query: ""
      });
    }
  };

  updateBook(shelf) {
    this.props.MoveBook(this.props.book, shelf);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" />
          <div className="search-books-input-wrapper">
            {}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.onChangeQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books
              .sort(sortBy("title"))
              .map(book => (
                <Livro
                  MoveBook={this.props.MoveBook}
                  key={book.id}
                  book={book}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
