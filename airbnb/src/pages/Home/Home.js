import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';

class Home extends Component{

    
    async componentDidMount(){// leting javascript know we wait for something to finish
        // const citiesUrl=`${window.apiHost}/cities/recommended`;
        // console.log(citiesUrl);
        // const recommendedCities=await axios.get(citiesUrl) //this can be used for posts recommendation
        // // console.log(recommendedCities.data);
        // this.setState({
        //     cities:recommendedCities.data
        // });
    }

    render(){
        // console.log(this.state.cities);
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