


import React, { Component } from 'react';
import mukul_photo from '../assets/images/mukul.jpeg'
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Testimonial extends Component {
  
    render() {
      return (
		<section class="section-proof section bg-white py-5">        
        	<div class="container-fluid" style={{width:'80%'}}>
				<h3 class="section-title font-weight-bold text-center">Testimonial</h3>
					<div class="position-relative p-5 shadow">
						<blockquote class="blockquote pl-4" >
						<svg class="svg-inline--fa fa-quote-left fa-w-16 quote-icon fa-lg p<!--osition-absolute text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>

						<p class="mb-4">Chirag is a very enthusiastic guy who is always keen to learn something new and expand his horizons. He has a rock-solid technical foundation. 
						I worked with him for eight months in which he showed characteristics of a great team player. A person like Chirag with his excellent problem solving, coding and communication skills will always prove to be a valuable asset for the team as well as organization. 
						I wish him very best for his future endeavors.</p>
						<footer class="blockquote-footer presudo-hidden">
							<div class="media client-profile flex-column flex-md-row">
								<img class="mr-md-3" src={mukul_photo} alt=""></img>
								<cite title="Source" class="quote-source d-inline-block font-style-normal pt-3">
									<span class="d-block">Mukul Kumar</span>
									<span class="d-block">Manager, Mahindra Rise</span>
									<span class="d-block position-absolute source-link">
										<a href = "https://www.linkedin.com/in/chirag-jain5/" target="_blank">View on linkedin <FontAwesomeIcon icon={faLinkedin} /></a>
										{/* <svg class="svg-inline--fa fa-linkedin fa-w-14 fa-2x mr-1" data-fa-transform="down-3" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" style={{transformOrigin: '0.4375em 0.6875em'}}><g transform="translate(224 256)"><g transform="translate(0, 96)  scale(1, 1)  rotate(0 0 0)"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" transform="translate(-224 -256)"></path></g><a>View on linkedin</a></g>
										</svg> */}
									</span>
								</cite>
							</div>
						</footer>
						</blockquote>
					</div>
				</div>
					
    	</section>
       
        
      );
    }
  }
  
  export default Testimonial;
  
