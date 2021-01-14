//import React, { Component } from 'react';
import React from 'react';

//stateless functional component
const NavBar = ({ totalCounters }) => {
    console.log("NavBar - Rendered");
    
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar {" "}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

// class NavBar extends Component {  
//     render() { 
//         return ( 
//             <nav class="navbar navbar-light bg-light">
//                 <a class="navbar-brand" href="#">
//                     Navbar {" "}
//                     <span className="badge badge-pill badge-secondary">
//                         {this.props.totalCounters}
//                     </span>
//                 </a>
//             </nav>
//         );
//     }
// }
 
export default NavBar;