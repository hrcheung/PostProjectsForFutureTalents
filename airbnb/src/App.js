import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import NavBar from "./utility/NavBar/NavBar";
import Home from "./pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <Home/>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

class App extends Component{
  render(){
    return  <RouterProvider router={router} />
}}

export default App;