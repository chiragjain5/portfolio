import React, { Component } from 'react';

//importing icons
import programming_icon from '../assets/images/programming_icon.svg'
import database_icon from '../assets/images/database_icon.svg'

//import font-awesome-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome, faWeibo  } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faTools } from '@fortawesome/free-solid-svg-icons';

class Skills extends Component {
  
    render() {
      return (
        
        <div className="skills-block col-12 col-lg-3 mb-5 mb-3 mb-lg-0">
            <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                <h4 className="skills-cat text-center mb-3 mt-5">Programming Languaes</h4>
                    <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                        <img className="skills-icon" src={programming_icon}></img>
                    </div>
                    <ul className="skills-list list-unstyled text-secondary">
                        <li className="mb-2"><i className="fas fa-check mr-2 text-primary"></i></li>
                        <li className="mb-2"></li>
                        <li className="mb-2"> <FontAwesomeIcon icon={faCheck } size='3x' style={{color: "#FFF"}}  />
                        </li>							        
                        <li className="mb-2"> <FontAwesomeIcon icon={faCheck } size='3x' style={{color: "#FFF"}}  />
                        </li>
                        <li className="mb-2"> <FontAwesomeIcon icon={faCheck } size='3x' style={{color: "#FFF"}}  />
                        </li>
                    </ul>
            </div>
        </div>
      );
    }
  }
  
  export default Skills;
  