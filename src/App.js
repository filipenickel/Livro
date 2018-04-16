import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Estante from './components/Estante'
import Busca from './components/Busca'


class BooksApp extends Component {
  state = {
    books:[]
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
            <Route exact path="/" component={Estante} />
            <Route path="/busca" component={Busca} />
          </Switch>
      </BrowserRouter>
    
  );
}
}

export default BooksApp
