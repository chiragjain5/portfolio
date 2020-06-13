import React, { Component } from 'react';
import {NavLink, BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import SocialIcons from './SocialIcons';
import About from './About'

class Nav extends Component {

    render() {
      // console.log( this.props.location.pathname)
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
                      <li className="nav-item mr-lg-3">
                          <NavLink className="nav-link" activeClassName="active" exact to="/about">about</NavLink>
                        </li>
                        <li className="nav-item mr-lg-3">
                          <NavLink className="nav-link" activeClassName="active" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item mr-lg-3">
                          <NavLink className="nav-link" activeClassName="active"  to="/resume">Resume</NavLink>
                        </li>
                        <li className="nav-item mr-lg-3">
                          <NavLink className="nav-link" activeClassName="active"  to="/contact">Contact</NavLink>
                        </li>
                        
                 
                      
                    </ul>
                    {/* <span id="slide-line"></span> */}
                  </div>
                  
                  
                  
                </nav>
              </div>
            </div>
   
        </header>    
            
      );
    }
  }
  
  export default withRouter(Nav);
  