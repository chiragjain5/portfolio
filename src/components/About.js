
import React, { Component } from 'react';
// import skill from './skill';
import Introduction from './Introduction';
import Skill from './Skills';
import Testimonial from './Testimonial';


import { faCheck, faTools, faCode, faDatabase} from '@fortawesome/free-solid-svg-icons';
import {faChrome, faWeibo} from '@fortawesome/free-brands-svg-icons';

class About extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        const skillData = [                                                            //Edit this to add more skills
            {
              skillDomain: "Programming Langues",
              iconName: faCode,
              skillNames: ["Python","Java","C"]
            },
            {
                skillDomain: "Databases",
                iconName: faDatabase,
                skillNames: ["MS SQL","MySQL","PostgreSQL","MongoDB"]
              },
              {
                skillDomain: "Web Technologies",
                iconName: faChrome,
                skillNames: ["HTML", "CSS", "PHP", "Ajax", "Bootstrap", "JavaScript", "jQuery", "D3.js", "React.js", "Node.js","Django", "Flask", "Laravel"]
              },
              {
                skillDomain: "Framework/Tools",
                iconName: faTools,
                skillNames: ["OpenCV","Scikit-Learn","AWS SQS","AWS EC2", "AWS S3", 
                "Google App Engine","Google Cloud SQL", "Google Cloud Tasks","jUnit", "git"] 
              },
        ]
    
        var skillBlocks = [];
        for (var i = 0; i < skillData.length; i++) {
            skillBlocks.push(<Skill skillInfo = {skillData[i]}/>);
        }
        return (
        <div>
            <Introduction/>
            

            <section className="skill-section section py-5">
                <div className="container">
                    <h3 className="section-title font-weight-bold text-center mb-3">Skill Overview</h3>
                    <div className="mx-auto mb-5 text-secondary" style= {{textAlign: 'justify',textJustify: 'inter-word'}}>Working as a Freelancer and Web Development Intern at Bombay Blokes, 
                    I gained some very essential skills in the field of Application Development. Additionally, several personal web development projects have 
                    helped me in learning some latest web technologies. This website builts using <strong>React.js</strong> is one of them :P
                    Further, I got a good hands-on experience in Machine Learning (Predictive Analytics) by working at Cere Labs as an Machine Learning Intern and Mahindra Rise as an Associate Analyst. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience? <a href="https://themes.3rdwavemedia.com/instance/bs4/resume.html">Check out my online resume</a>
                    .</div>
                    <div className="skill-blocks mx-auto">
                        <div className="row">
                            {skillBlocks}              
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial/>
            
        </div>
      );
    }
  }
  
  export default About;
  