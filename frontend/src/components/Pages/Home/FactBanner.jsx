import React, { Component, } from 'react'
import { connect } from 'react-redux';


import fact1 from '../../../images/facts/fact1.png'
import fact2 from '../../../images/facts/fact2.png'
import fact3 from '../../../images/facts/fact3.png'
import fact4 from '../../../images/facts/fact4.png'

class FactBanner extends Component {


    render() {
       return(
           <div className='fact-banner'>
        
        
                <img src={fact1} alt="fact1" />
            
                <img src={fact2} alt="fact2" />
           
                <img src={fact3} alt="fact3" />
            
                <img src={fact4} alt="fact4" />
            
        

        </div>
       )
    }
}


export default connect()(FactBanner);