import React, { Component } from 'react';
import {NavLink, BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/About'

import './App.css';
import Nav from './components/Navbar.js';

// css
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/main.css'
import './assets/css/flickity.min.css'
import './assets/css/theme-1.css'
import './assets/css/index.css'

// js

// import './assets/js/analytics.js'
// import './assets/js/all.js'
// import './assets/js/jquery-3.4.1.min.js'

// import './assets/js/fbevents.js'
// import './assets/js/popper.min.js'
// import './assets/js/bootstrap.min.js'
// import './assets/js/flickity.pkgd.min.js'
// import './assets/js/main.js'
// import './assets/js/flickity-custom.js'



class App extends Component {
  
  render() {
    const slide_style = {
      width: '61.8984px',
       left: '1218.38px',
    };

    
    return (
        <div>
          <Router>
            <Nav/>
            <Route path="/" component={About}></Route>
            {/* <Route path="/about" component={Nav}></Route> */}
          </Router>
        </div>
         
    );
  }
}

export default App;
