import React, { Component } from 'react'

import { connect } from 'react-redux';
import { Image, Card } from 'react-bootstrap';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'



class TeamMember extends Component {
    render() {
        return (
            <div className="teamMember">
                <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" roundedCircle  />
            
                <h3>{this.props.props.name}</h3>
                <div className="member-description">
                <p>{this.props.props.job}</p>
                <p className="grey-text">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
                <ul >
                    <a href={this.props.props.twitter} >
                        <AiFillTwitterCircle />
                    </a>
                    <a href={this.props.props.github} >
                        <AiFillGithub />
                    </a>
                    <a href='https://linkedin.com' >
                        < AiFillLinkedin />
                    </a>

                </ul>
                </div>

                </div>
            
           
        )
    }
}
export default connect()(TeamMember);