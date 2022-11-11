import React, { Component } from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends Component{

    render(){
        let navColor="transparent";
        if (this.props.location.pathname!=='/'){
            //user not in home page
            navColor="black";
        }
        return(<div className="container-fluid nav">
                <div className='row'>
                    <nav className={navColor}>
                    <Link to="/" className="left">airbnb</Link>
                        <div className='nav-wrapper'>
                            <ul id='nav-mobile' className='right'>
                                <li><Link to="/">English (US)</Link></li>
                                <li><Link to="/"></Link></li>
                            </ul>
                        </div>
                    </nav>
                    

                </div>


        </div>
        )
    }
}

export default NavBar;
