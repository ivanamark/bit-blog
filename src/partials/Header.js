import React from "react";
import { Link } from 'react-router-dom';
const Header = (props) => {
    return (
        
         <nav>
    <div class="nav-wrapper">
      <p class="brand-logo">BitBlog</p>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
                            
                                {/* Change from a to Link */}
                                <li ><Link to='/homepage'>Home</Link></li>
                                <li><Link to="/authors">Authors</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                      
        </nav>
       

    )
}
export {Header}