import React, { Component } from 'react'

import { connect } from 'react-redux';
import TeamMember from './TeamMember';
import { CardGroup } from 'react-bootstrap'
import {Parallax} from 'react-scroll-parallax';
import dimaimg from '../../../images/TeamPictures/dima.png'
import kostyaimg from '../../../images/TeamPictures/kostya.jpg'
import imogenimg from '../../../images/TeamPictures/imogen.png'
import alexeyimg from '../../../images/TeamPictures/alexey.png'



class Who extends Component {
  state = {
    Imogen: { name: 'Imogen', job: 'Web Developer', image: imogenimg, twitter: '', github: '' },
    Dima: { name: 'Dima', job: 'Web Developer', image: dimaimg, twitter: '', github: '' },
    Alexey: { name: 'Alexey', job: 'Web Developer', image: alexeyimg, twitter: '', github: '' },
    Kostya: { name: 'Kostya', job: 'Web Developer', image: kostyaimg, twitter: '', github: '' },
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="root who-banner">

        <div className="container">
            <div className="ourteam">
              <h2>OUR AMAZING TEAM</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>

              <CardGroup className="wrap-deck">
                <TeamMember props={this.state.Imogen} />
                <TeamMember props={this.state.Dima} />
                <TeamMember props={this.state.Alexey} />
                <TeamMember props={this.state.Kostya} />
              </CardGroup>
            </div>
          

        </div>
      </div>

    )
  }
}


export default connect()(Who);

