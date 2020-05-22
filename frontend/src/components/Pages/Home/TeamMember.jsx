import React, { Component } from 'react'

import { connect } from 'react-redux';
import { Image, Card, CardGroup } from 'react-bootstrap';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'



class TeamMember extends Component {
  render() {
    return (
      <div className="teamMember">
        <img src={this.props.props.image} />
        <div>
          <div>
            <h3>{this.props.props.name}</h3>
            <p>{this.props.props.job}</p>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci sed quia non numquam modi tempora eius.
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
