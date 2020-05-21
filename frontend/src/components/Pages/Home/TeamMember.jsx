import React, { Component } from 'react'

import { connect } from 'react-redux';
import { Image, Card, CardGroup } from 'react-bootstrap';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'



class TeamMember extends Component {
    render() {
        return (
            <Card className="teamMember">
                <Image src={this.props.props.image} roundedCircle />
                <Card.Text>
                    <h3>{this.props.props.name}</h3>
                        <p>{this.props.props.job}</p>
                        <p>
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
                </Card.Text>
            </Card>
            
           
        )
    }
}
export default connect()(TeamMember);