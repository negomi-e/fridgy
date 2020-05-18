import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import { ModalWindow } from '../../../Common/Modal/ModalWindow.jsx'
import BtnDelete from '../ControlElements/BtnDelete.jsx'
import BtnComplete from '../ControlElements/BtnComplete.jsx'



export default class ProductSL extends Component {


  render() {
    return (
      <ListGroup.Item id={this.props._id} className={this.props.status ? "complete" : "no-complete"}>
        <div className="textBlock_SL">
          <p>{this.props.label}</p>
        </div>
        <div className="controlBlock_SL">
          <BtnComplete id={this.props._id} />
          <ModalWindow>
            <BtnDelete id={this.props._id} />
          </ModalWindow>
        </div>
      </ListGroup.Item>
    )
  }
}


