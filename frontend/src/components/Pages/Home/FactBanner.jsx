import React, { Component } from 'react'

import { connect } from 'react-redux';
import { Parallax, Image } from 'react-scroll-parallax';
import fact1 from '../../../images/fact1.png'
import fact2 from '../../../images/fact2.png'
import fact3 from '../../../images/fact3.png'
import fact4 from '../../../images/fact4.png'



class FactBanner extends Component {
  
  render() {

    return (
        <Parallax className="fact-banner" 
        y={[-20, 20]} tagOuter="figure"
        >
        <Image src={fact1} alt="fact1"/>
        <Image src={fact2} alt="fact2"/>
        <Image src={fact3} alt="fact3"/>
        <Image src={fact4} alt="fact4"/>
    </Parallax>
    )
  }
}


export default connect()(FactBanner);