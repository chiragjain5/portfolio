import React, { Component } from 'react';
import {NavLink, BrowserRouter as Router, Route} from 'react-router-dom';
import SocialIcons from './SocialIcons';
import About from './About'

class Nav extends Component {
  
    render() {
      return (
        <header className="header">
          
          <div className="top-bar theme-bg-primary-darken">
              <div className="container-fluid">
              
                <nav className="navbar navbar-expand-lg navbar-dark position-relative">       
                <SocialIcons/>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  
                  <div className="collapse navbar-collapse text-uppercase text-center" id="navigation">
                    <ul className="navbar-nav ml-lg-auto">
                      <Router>
                      <li className="nav-item mr-lg-3">
                          <NavLink className="nav-link" activeClassName="active" to="/about">about</NavLink>
                        </li>
                        <li className="nav-item mr-lg-3">
                          <NavLink className="nav-link" activeClassName="active" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item mr-lg-3">
                          <NavLink className="nav-link" activeClassName="active" to="/resume">Resume</NavLink>
                        </li>
                        <li className="nav-item mr-lg-3">
                          <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                        </li>
                      </Router>
                        
                 
                      
                    </ul>
                    {/* <span id="slide-line"></span> */}
                  </div>
                  
                  
                  
                </nav>
              </div>
            </div>
              <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
  
        </header>    
            
      );
    }
  }
  
  export default Nav;
  