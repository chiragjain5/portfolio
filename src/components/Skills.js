import React, { Component } from 'react';

//importing icons
import programming_icon from '../assets/images/programming_icon.svg'
import database_icon from '../assets/images/database_icon.svg'

//import font-awesome-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChrome, faWeibo  } from '@fortawesome/free-brands-svg-icons';

import { faCheck, faAlignRight} from '@fortawesome/free-solid-svg-icons';

class skill extends Component {
  constructor(props) {
    super(props);
  }
  // renderLists(i) {
  //   var rows = [];
  //   return (
  //     for (var i = 0; i < numrows; i++) {
  //         rows.push(ObjectRow());
  //     }
  //     return tbody(rows);
  //   );
  // }
    render() {
      console.log(this.props.skillInfo)
      var skillRows = [];
      for (var i = 0; i < this.props.skillInfo.skillNames.length; i++) {
          skillRows.push(<li className="mb-2" style = {{}}> <FontAwesomeIcon icon={faCheck } size='1x' style={{color: "#41A4F5", marginRight:4}}  />
          {this.props.skillInfo.skillNames[i]}</li>);
      }
      console.log(this.props.skillInfo);
      return (
        <div className="skill-block col-12 col-lg-3 mb-5 mb-3 mb-lg-0">
            <div className="skill-block-inner bg-white shadow-sm py-4 px-5 position-relative" style={{paddingLeft:'1rem',paddingRight:'1rem'}}>
              <h4 className="skill-cat text-center mb-3 mt-5">{this.props.skillInfo.skillDomain}</h4>
              
              <div class="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                <FontAwesomeIcon icon = {this.props.skillInfo.iconName} size = '2x' style={{color:"white"}}/>

					    </div>
               <ul className="skill-list list-unstyled text-secondary"> 
                  {skillRows}    
              </ul>
            </div>
        </div>
      );
    }
  }
  
  export default skill;
  