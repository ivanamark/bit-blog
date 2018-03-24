import React from "react";
import { Link } from 'react-router-dom';
const Header = (props) => {
    return (
     <nav>
        <div className="nav-wrapper  purple darken-2">
            <p className="brand-logo">RND BLG</p>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                            
                                
                    <li ><Link to='/homepage'>Home</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
        </div>
                      
     </nav>
       

    )
}
export {Header}