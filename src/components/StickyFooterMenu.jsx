import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/stickyFooterMenu.css'


class StickyFooterMenu extends Component{
    render(){
        return(
            <div class="navbarF">
                 <div className="justify-content-center my-flex" >
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Work</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        )
    }
}

export default StickyFooterMenu;