import React, { Component } from 'react'

import { connect } from 'react-redux';
import { CardDeck } from 'react-bootstrap';
import TeamMember from './TeamMember'



class Who extends Component {
   state={
        Imogen : {name:'Imogen', job:'Web Developer', image:'', twitter: '', github:'' }, 
        Alexey : {name:'Alexey', job:'Web Developer', image:'', twitter: '', github:'' },
        Dima : {name:'Dima', job:'Web Developer', image:'', twitter: '', github:'' },
        Kostya : {name:'Kostya', job:'Web Developer', image:'', twitter: '', github:'' },
    }

  componentDidMount() {

  }

  render() {

    return (
      <div className="ourteam">
        <h2>Our amazing team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        
        <div className="wrap-deck">

                

              <TeamMember props={this.state.Alexey} />
              <TeamMember props={this.state.Dima} />
              <TeamMember props={this.state.Kostya} />
              <TeamMember props={this.state.Imogen} />
              
        </div>
    </div>
    )
  }
}


export default connect()(Who);