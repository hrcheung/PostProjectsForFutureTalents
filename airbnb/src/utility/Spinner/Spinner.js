import React, { Component } from 'react';
import './Spinner.css';
import { Link } from 'react-router-dom';

class Spinner extends Component{

    render(){
        // console.log(this.props.spinner);
        
        return(
            <div className='spinner'><h1>City</h1></div>
        )
    }
}

export default Spinner;