import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/navbar.css'


class Navbar extends Component{
    render(){
        return(
            <div className="navbar  d-none col-md-12 col-sm-12 d-sm-block my-navbar-padding">
                <div className="justify-content-center my-flex" >
                <a className="active" href="#home">HOME</a>
                <a href="#projects">PROJECTS</a>
                <a href="#about">ABOUT</a>
                <a href="#contact">CONTACT</a>
                </div>
            </div>
        )
    }
}

export default Navbar;