import React,{Component} from 'react'

import { BrowserRouter,Switch, Route } from "react-router-dom";
import Estante from './Estante'
import Busca from './Busca'



export default class Router extends Component {
    render() {
        return(
           
         
            
         <BrowserRouter>
         <Switch>
             <Route exact path="/" component={Estante} />
             <Route path="/busca" component={Busca} />
             </Switch>
         </BrowserRouter>
         )}   

        
          
}


        
          
