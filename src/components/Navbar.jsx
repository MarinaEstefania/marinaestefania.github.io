import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/navbar.css'


class Navbar extends Component{
    render(){
        return(
            <div className="navbar  d-none col-md-12 col-sm-12 d-sm-block my-navbar-padding">
                <div className="justify-content-center my-flex" >
                <a href="#home">Home</a>
                <a href="#about">About Me</a>
                <a href="#projects">Recent Work</a>
                <a href="#contact">Contact</a>
                </div>
            </div>
        )
    }
}

export default Navbar;