import React,{Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'


export default class Busca extends Component {
    render() {
        return(
           
         
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/"></Link>
                <div className="search-books-input-wrapper">
                  {}
                  <input type="text" placeholder="Buscar por Titulo ou Autor"/>
  
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
                
              </div>
            
            </div>
         )}   

        
          
}
