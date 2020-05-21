import React, { Component } from 'react'

import { connect } from 'react-redux';
import { Parallax } from 'react-scroll-parallax';
class Welcome extends Component {


    render() {
       return(
       <Parallax className="welcome-banner"
     >
       <h1>WELCOME TO FRIDGY</h1> 
       <span style={{fontStyle: 'italic'}}>Keeping your fridge fresh</span>
       </Parallax>
        );


    }
}


export default connect()(Welcome);

