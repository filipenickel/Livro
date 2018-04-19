import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Estante from './components/Estante'
import Busca from './components/Busca'


class BooksApp extends Component {
  state = {
    books:[],
}

    moveBook = (book, shelf) => {
      if (this.state.books) {
        BooksAPI.update(book,shelf).then(() => {
          book.shelf = shelf;
          this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat([ book ])
          }))
        })
      }
    }

    componentDidMount(){
    BooksAPI.getAll().then((books)=>{
        this.setState({books})
    })
    }

  render() {
    return (

      
      <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Estante 
              MoveBook={this.moveBook}
              books={this.state.books} />}  />

            <Route path="/busca" render={() => <Busca 
              MoveBook={this.moveBook}  />} />
          </Switch>
      </BrowserRouter>
    
  );
}
}

export default BooksApp
