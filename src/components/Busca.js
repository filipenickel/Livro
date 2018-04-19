import React,{Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Livro from './Livro'
import sortBy from 'sort-by'


export default class Busca extends Component {
  state = {
    query: '',
    books: []
  } 


    onChangeQuery = (q) => {
        let query = q.trim();
        if (q) {
          BooksAPI.search(query).then(book => {
            this.setState({
              books: book,
              query: q
            })
          }).catch(erro => {
            this.setState({
              books: [],
              query: q
            })
            console.log("Sem retorno: " + erro + " books: " + this.state.books.length)
          }

          );

        } else {
          this.setState({
            books: [],
            query: ''
          });
        }
      }

      updateBook(shelf) {
        this.props.MoveBook(this.props.book, shelf)
      }


    render() {
        return(
           
         
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/"></Link>
                <div className="search-books-input-wrapper">
                  {}
                  <input 
                      type="text" 
                      placeholder="Search by title or author"
                      onChange={(e) => this.onChangeQuery(e.target.value)}
            />
  
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                      {this.state.books.sort(sortBy('title'))
                        .map(book => (
                          <Livro 
                                MoveBook={this.props.MoveBook}
                                key={book.id}
                                book={book}
                            
                          />
                        ))
                      }
                </ol>
                
              </div>
            
            </div>
         )}   

        
          
}
