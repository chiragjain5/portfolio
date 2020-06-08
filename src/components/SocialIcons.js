import React, { Component } from 'react';


class SocialIcons extends Component {
  
    render() {
      return (
        
        <ul className="social-list list-inline mb-0">
            {/* <li className="list-inline-item"><a className="text-white" href="https://themes.3rdwavemedia.com/instance/bs4/index.html#"><i className="fab fa-twitter fa-fw"></i> </a></li> */}
            <li className="list-inline-item"><a className="text-white" href="https://www.linkedin.com/in/chirag-jain5/" target="_blank"><i className="fab fa-linkedin-in fa-fw"></i> </a></li>
            <li className="list-inline-item"><a className="text-white" href="https://github.com/chiragjain5" target="_blank"><i className="fab fa-github-alt fa-fw"></i> </a></li>
            {/* <li className="list-inline-item"><a className="text-white" href="https://themes.3rdwavemedia.com/instance/bs4/index.html#"><i className="fab fa-stack-overflow fa-fw"></i> </a></li> */}
            {/* <li className="list-inline-item"><a className="text-white" href="https://themes.3rdwavemedia.com/instance/bs4/index.html#"><i className="fab fa-codepen fa-fw"></i> </a></li> */}
        </ul>                  
              
      );
    }
  }
  
  export default SocialIcons;
  