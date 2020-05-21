import React from 'react';
import TodoApp from './TodoApp/TodoApp';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import {BrowserRouter as Router , Route } from 'react-router-dom'




export default ()=>{
    return(
       
        <Router>
            <Header />
            <Route path="/" exact component={TodoApp}/>
            <Route path="/About" component={About} />
        </Router>
        
    )
}
