import React, { Component } from 'react'

//PARALLAX
// import style from './Marquee.scss';
// import { Svg } from 'components';
import { Parallax } from 'react-scroll-parallax';

import { connect } from 'react-redux';
import TeamMember from './TeamMember';
import dimaimg from '../../../images/dima.png'
import kostyaimg from '../../../images/kostya.jpg'
import imogenimg from '../../../images/imogen.png'
import alexeyimg from '../../../images/alexey.png'

// const test = 'https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg'



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
      <div className="root">
        {/* <Svg svg={divider} className={style.divider} /> */}
        <div className="container">
            {/* <Svg svg={boxBg} className={style.boxBg} /> */}
            <Parallax
                className="text"
                offsetYMax={70}
                offsetYMin={-70}
                offsetXMax={-30}
                offsetXMin={30}
            >
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
            </Parallax>
            <Parallax
                className="boxOutline"
                offsetYMax={35}
                offsetYMin={-35}
            >
                {/* <Svg svg={boxOutline} /> */}
            </Parallax>
        </div>
    </div>
      
    )
  }
}


export default connect()(Who);
