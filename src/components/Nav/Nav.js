import React from 'react';
import './nav.scss'


function Nav(props) {
    return (
    <div class="">
      <nav className={`navbar navbar-expand-lg navbar-light  nav-${props.type}`}>
        <a className="navbar-brand" href="#">
          {props.logo}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            
            {
              props.links.map((link,index)=>(
                <li className="nav-item active" key={index}>
                  <a className="nav-link" href="#">
                    {link} 
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              ))
            }
            
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
      </div>
    );
}

export default Nav;