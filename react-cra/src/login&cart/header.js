import React from 'react';
import img1 from './logo.png';

function Header(){
return(
    <header>
        <nav className="navbar navbar-light" style={{backgroundColor:'#00a3da'}}>
        <div className="container">
            <a className="navbar-brand" id="homePage" href="#">
            <img src={img1} alt="Logo of the company" width="70px" height="70px" />
            </a>
            <div className="nav-item dropdown my-auto">	
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
                <div className="d-flex">
                    <i className="material-icons me-2" style={{fontSize:'60px', color:'#ace3f5'}}>account_circle</i>
                    <p className="my-auto">Kevin</p>
                    <i className="material-icons my-auto" style={{fontSize:'30px'}}>expand_more</i>
                </div>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            
            </div>
        </div>
        </nav>	
    </header>
)
}

export default Header;