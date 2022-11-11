import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';

class Home extends Component{
    
    async componentDidMount(){// leting javascript know we wait for something to finish
        const recommendedCities=await axios.get(`${window.apiHost}/cities/recommended`) //this can be used for posts recommendation
        console.log(recommendedCities.data);
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div>this is the upper fold</div>
                    
                </div>
            </div>
        )
    }
}

export default Home;