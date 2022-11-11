import React, { Component } from 'react';
import './City.css';
import { Link } from 'react-router-dom';

class City extends Component{

    render(){
        // console.log(this.props.city);
        
        return(
            <div className='city'><h1>City</h1></div>
        )
    }
}

export default City;