import React, {Component} from 'react';
import '../style/sidebar.css';

class Sidebar extends Component{
    render(){
        return(
            <div class="sidebar ">
              {/*   <a href="#about">dsfsfsfdsfd</a> */}
                <a href="#services"></a>
                <a href="#clients"></a>
                <a href="#contact"></a>
             </div>
        )
    }
}

export default Sidebar;