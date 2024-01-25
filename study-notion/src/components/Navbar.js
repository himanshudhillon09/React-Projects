import React from "react";
import { Link } from "react-router-dom";






const Navbar = () => {
    return (
        <div>
            <div>Img</div>
            <nav>
                <ul>
                    <li>
                        {<Link to='/' >Home</Link>}
                    </li>
                    <li>{<Link to='/about'>About</Link>}</li>
                    <li>{<Link to='/contact' >Contact</Link>}</li>
                </ul>
            </nav>
        </div>
        
    );
}


export default Navbar;