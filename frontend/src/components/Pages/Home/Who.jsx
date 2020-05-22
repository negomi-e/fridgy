import React, { Component } from 'react'

import { connect } from 'react-redux';
import TeamMember from './TeamMember';
import { CardGroup } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax';
import dimaimg from '../../../images/TeamPictures/dima.jpg'
import kostyaimg from '../../../images/TeamPictures/kostya.jpg'
import imogenimg from '../../../images/TeamPictures/imogen.png'
import alexeyimg from '../../../images/TeamPictures/alexey.png'



class Who extends Component {
  state = {
    Imogen: { name: 'Imogen', job: 'Web Developer', image: imogenimg, twitter: 'https://twitter.com/negomi13', github: 'https://github.com/negomi-e/', description: 'The Best from the West' },
    Dima: { name: 'Dima', job: 'Web Developer', image: dimaimg, twitter: '', github: 'https://github.com/pakdmitry88', description:'The creative genuis' },
    Alexey: { name: 'Alexey', job: 'Web Developer', image: alexeyimg, twitter: '', github: 'https://github.com/AV-Aleksey', description:'The cleaner' },
    Kostya: { name: 'Kostya', job: 'Web Developer', image: kostyaimg, twitter: '', github: 'https://github.com/samolevich', description:'The master of jokes' },
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="root who-banner">

        <div className="container">
          <div className="ourteam">
            <h2>OUR AMAZING TEAM</h2>
            <span>We are an international team of innovative developers and environmentalists exploring the worlds of Java script , React and Redux.
We enjoy developing our abilities to solve complex problems successfully by coming together as a team to overcome differences in language, culture and the mind boggling raft of programs!</span>

            <CardGroup>
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

