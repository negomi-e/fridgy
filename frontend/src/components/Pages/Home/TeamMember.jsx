import React, { Component } from 'react'
import { connect } from 'react-redux';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


class TeamMember extends Component {
  render() {
    return (
      <div className="teamMember">
        <img src={this.props.props.image} alt='img' />
        <div>
          <div>
            <h3>{this.props.props.name}</h3>
            <p>{this.props.props.job}</p>
            <p>
              {this.props.props.description}
            </p>
          </div>
          <div className="teamMemberLinks">
            <a href={this.props.props.twitter} >
              <AiFillTwitterCircle />
            </a>
            <a href={this.props.props.github} >
              <AiFillGithub />
            </a>
            <a href='https://linkedin.com' >
              < AiFillLinkedin />
            </a>
          </div>
        </div>
      </div >
    )
  }
}
export default connect()(TeamMember);
