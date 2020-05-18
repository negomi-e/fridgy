import React, { Component } from 'react'

import { connect } from 'react-redux';
import TeamMember from './TeamMember';
import dimaimg from '../../../images/dima.png'
import kostyaimg from '../../../images/kostya.jpg'
import imogenimg from '../../../images/imogen.png'

const test = 'https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg'



class Who extends Component {
  state = {
    Imogen: { name: 'Imogen', job: 'Web Developer', image: imogenimg, twitter: '', github: '' },
    Dima: { name: 'Dima', job: 'Web Developer', image: dimaimg, twitter: '', github: '' },
    Alexey: { name: 'Alexey', job: 'Web Developer', image: test, twitter: '', github: '' },
    Kostya: { name: 'Kostya', job: 'Web Developer', image: kostyaimg, twitter: '', github: '' },
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
          <TeamMember props={this.state.Imogen} />
          <TeamMember props={this.state.Dima} />
          <TeamMember props={this.state.Alexey} />
          <TeamMember props={this.state.Kostya} />
        </div>
      </div>
    )
  }
}


export default connect()(Who);