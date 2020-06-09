
import React, { Component } from 'react';
import Skills from './Skills';
import Introduction from './Introduction';


class About extends Component {
  
    render() {
      return (
        <div>
            <Introduction/>
            

            <section className="skills-section section py-5">
                <div className="container">
                    <h3 className="section-title font-weight-bold text-center mb-3">Skills Overview</h3>
                    <div className="section-intro mx-auto text-center mb-5 text-secondary">Working as a Freelancer and Web Development Intern at Bombay Blokes, 
                    I gained some very essential skills in the field of Application Development. Additionally, several personal Web development projects 
                    helped me in learning some latest Web Technologies. This website builts using React.js is one of them :P.
                    Further, I got a good hands-on experience in Machine Learning (Predictive Analytics) by working at Cere Labs as an Machine Learning Intern and Mahindra Rise as an Associate Analyst. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience? <a href="https://themes.3rdwavemedia.com/instance/bs4/resume.html">Check out my online resume</a>.</div>
                    
                    <div className="skills-blocks mx-auto pt-5">
                        <div className="row">
                            <Skills/>
                            <Skills/>
                            <Skills/>
                            <Skills/>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
      );
    }
  }
  
  export default About;
  