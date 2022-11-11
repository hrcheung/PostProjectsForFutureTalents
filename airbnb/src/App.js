import React,{Component} from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from "./utility/NavBar/NavBar";
import Home from "./pages/Home/Home";
class App extends Component{
  render(){
    return(
    <Router>
      <Routes>
        <Route path='/' component = {NavBar}/>
        <Route exact path='/' component = {Home}/>
      </Routes>
    </Router>
    )
  }
}

export default App;