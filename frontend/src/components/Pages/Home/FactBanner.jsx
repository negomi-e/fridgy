import React, { Component, } from 'react'
import { connect } from 'react-redux';
import {Image} from 'react-bootstrap'

import fact1 from '../../../images/facts/fact1.png'
import fact2 from '../../../images/facts/fact2.png'
import fact3 from '../../../images/facts/fact3.png'
import fact4 from '../../../images/facts/fact4.png'

class FactBanner extends Component {


    render() {
       return(
           <div className='fact-banner'>
        
        
                <Image src={fact1} style={{borderRadius:'10px'}} alt="fact1" />
            
                <Image src={fact2} style={{borderRadius:'10px'}} alt="fact2" />
           
                <Image src={fact3} style={{borderRadius:'10px'}} alt="fact3" />
            
                <Image src={fact4} style={{borderRadius:'10px'}} alt="fact4" />
            
        

        </div>
       )
    }
}


export default connect()(FactBanner);