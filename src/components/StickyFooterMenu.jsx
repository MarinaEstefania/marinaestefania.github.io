import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/stickyFooterMenu.css'


class StickyFooterMenu extends Component{
    render(){
        return(
            <div class="navbarF">
                 <div className="justify-content-center my-flex" >
                    <a href="#home"><i class="fas fa-home fa-2x my-flex"></i>Home</a>
                    <a href="#projects"><i class="fas fa-briefcase fa-2x my-flex"></i>Projects</a>
                    <a href="#about"><i class="fas fa-user fa-2x my-flex"></i>About</a>
                    <a href="#contact"><i class="fas fa-address-book fa-2x my-flex"></i>Contact</a>
                </div>
            </div>
        )
    }
}

export default StickyFooterMenu;