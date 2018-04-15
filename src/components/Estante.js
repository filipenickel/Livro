import React,{Component} from 'react'
import '../App.css'
import Livros from './Livros'
import {Link} from 'react-router-dom'


export default class  Estante extends Component {
    render() {
        return(
            
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
                        <Livros />
                        </div>
                    </div>

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                        <Livros />
                        </div>
                    </div>

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                        <Livros />
                        </div>
                    </div>

                </div>
            </div>
            </div>  
            <div className="open-search">
              <Link 
              to="/busca"
              >Add a book</Link>
            </div>
            </div>  
            
            

        
        );}
    }