
import React, { Component } from 'react';

//importing images
import profile1 from '../assets/images/profile1.jpg';


class Introduction extends Component {
  
    render() {
      return (
        
            <div className="header-intro theme-bg-primary text-white py-5">
                <div className="container">
                    <div className="profile-teaser media flex-column flex-md-row">
                        <img className="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" src={profile1} alt=""></img>
                        <div className="media-body text-center text-md-left">
                        <div className="lead">Hello, my name is</div>
                        <h2 className="mt-0 display-4 font-weight-bold">Chirag Jain</h2>
                        <div className="bio mb-3"> I'm a Master's in Computer Science Student in ASU. I have keen interest Software Development and Predictive Analytics. 
                        For me, life is all about constanly challenging yourself and learning new skills
                        </div>
                        
                        </div>
                    </div>
                    
                </div>
            </div>      
            );
    }
  }
  
  export default Introduction;
  

            