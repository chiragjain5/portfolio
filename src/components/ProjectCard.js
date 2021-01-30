import React, { Component } from 'react';


class ProjectCard extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log(this.props)
        var techList = [];
        for (var i = 0; i < this.props.projectInfo.techStack.length; i++) {
            techList.push(<li className="list-inline-item"><span className="badge badge-secondary badge-pill">{this.props.projectInfo.techStack[i]}</span></li>);
        }
      return (
		  
        <div className="isotope-item col-12 col-lg-4">
            <div className="card rounded-0 border-0 shadow-sm mb-5">
                <div className="card-img-container position-relative">
                <img className="card-img-top rounded-0" src={this.props.projectInfo.imgSrc} alt="" ></img>
                <div className="card-img-overlay overlay-logo text-center">
                    <div className="project-logo"><img className="img-fluid w-50" src="assets/logo-1-inverse.svg" /></div>
                </div>
                <a className="card-img-overlay overlay-content text-left p-lg-4" href="https://themes.3rdwavemedia.com/instance/bs4/project.html">
                    <h5 className="card-title font-weight-bold">Summary</h5>
                        fdsfd
                </a>
                </div>
                <div className="card-body pb-0">
                <h4 className="card-title text-truncate text-center mb-0"><a href="https://themes.3rdwavemedia.com/instance/bs4/project.html">{this.props.projectInfo.title}</a></h4>
                </div>
                <div className="card-footer border-0 text-center bg-white pb-4">
                <ul className="list-inline mb-0 mx-auto">
                    {techList}
                </ul>
                </div>
            </div>{/*//card*/}
        </div>

      );
    }
  }
  
  export default ProjectCard;
  
		        
    
        

    
    
    
 

