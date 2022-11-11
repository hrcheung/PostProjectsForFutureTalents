import React,{Component} from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from "./utility/NavBar/NavBar";
import Home from "./pages/Home/Home";
class App extends Component{
  render(){
    return(
    <Router>
      <Routes>

      
      <Route path='/' element = {NavBar}/>
      
      <Route exact path='/' element = {Home}/>
      </Routes>
    </Router>
    )
  }
}

export default App;