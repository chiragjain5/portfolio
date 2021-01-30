import React, { Component } from 'react';
import profile1 from '../assets/images/profile1.jpg';
import ProjectCard from './ProjectCard';
import contact_tracing from '../assets/images/contact_tracing.jpg';


class Projects extends Component {
	
    render() {
		const projectData = [                                                            //Edit this to add more skills
			{
				title: "Pandemic Contact Tracing App",
				summary: "It tracks pandemic",
				techStack: ['Flask','MySQL','Java'],
				imgSrc: contact_tracing		
			},
			
			{
				title: "Pandemic Contact Tracing App",
				summary: "It tracks pandemic",
				techStack: ['Flask','MySQL','Java'],
				imgSrc: contact_tracing		
			},
			{
				title: "Pandemic Contact Tracing App",
				summary: "It tracks pandemic",
				techStack: ['Flask','MySQL','Java'],
				imgSrc: contact_tracing		
			},
			{
				title: "Object-Detecion-AWS-AutoScaling",
				summary: "Detects Obects and Scales",
				techStack: ['Python','SQS','EC2', 'S3', 'Raspberry Pi'],
				imgSrc: contact_tracing		
			},
			{
				title: "Pandemic Contact Tracing App",
				summary: "It tracks pandemic",
				techStack: ['Flask','MySQL','Java'],
				imgSrc: contact_tracing		
			},
		]
		var projects = [];
		for (var i = 0; i < projectData.length; i++) {
			projects.push(<ProjectCard projectInfo = {projectData[i]}/>);
		}
		return (
		<div>
			<div class="header-intro theme-bg-primary text-white py-5">
				<div class="container">
					<h2 class="page-heading mb-3">Projects</h2>
					<div class="page-heading-tagline">In-depth Case Studies to show you what I can offer and how I work
					</div>
				</div>
			</div>
			<section className="section pt-5">
				<div className="container">
					<div className="project-cards row isotope" style={{position: 'relative'}}>
							{projects}
					</div>
				</div>
			</section>
	
		</div>
			
		

		);
	}
  }
  
  export default Projects;
  
		        
    
        

    
    
    
 

