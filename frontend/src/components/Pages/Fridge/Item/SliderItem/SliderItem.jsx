import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getRecipes } from '../../../../../redux/Actions/fridge-actions'
import { AiOutlineDelete, AiFillEdit, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai'
// import { Icon } from 'react-native-elements'
import { BsFillCircleFill } from 'react-icons/bs'
import { deleteItemThunk } from '../../../../../redux/Thunk/fridgeThunk'
import {productImage} from '../../../../../images/banana.jpeg'
import { addProductSL_Thunk } from '../../../../../redux/Thunk/shoppingListThunk'


import {NavLink} from 'react-router-dom'

import { Container, Row, Col, Card } from 'react-bootstrap';
import './SliderItem.css'


class SliderItem extends Component {
  render() {
    // console.log(this.props.props);

    const { label, dayRemaining, _id, category } = this.props.props


    let expiryText = '';
    let toggleColor;

    //TEXT DISPLAYED
    if (dayRemaining <= 0) {
      expiryText = 'Item has expired'
    } else {
      expiryText = dayRemaining + ' days left'
    }

    //COLOUR CHANGE
    if (dayRemaining <= 2) {
      toggleColor = '#FF0000'
    } else if (dayRemaining >= 3 && dayRemaining < 5) {
      toggleColor = '#FF8C00'
    } else {
      toggleColor = '#228B22'
    }

        return (
            <>

                <Container>
                    <Card>
                        {/* <Card.Img variant="top" src={productImage} alt="product" /> */}
                        <Card.Body>
                            <Card.Title style={{color:'black'}}>{label}</Card.Title>
                            <Card.Text>
                                <Row className="justify-content-md-center" style={{backgroundColor:'black'}}>
                                    <Col xs lg="1" onClick={()=> this.props.deleteItemThunk(_id, category)}><AiOutlineDelete /></Col>
                                    <Col xs lg="1" onClick={() => this.props.onEditTask(_id)}><AiFillEdit /></Col>
                                   
                                    <NavLink to={`/recipes/${label}`}><Col xs lg="1" onClick={()=>this.props.getRecipes(label)}><AiOutlinePlus /></Col></NavLink>
                                    <Col xs lg="1" onClick={() => this.props.addProductSL_Thunk(label, this.props.userId)}><AiOutlineShoppingCart /></Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><BsFillCircleFill color={toggleColor} />  {expiryText}</small>
                        </Card.Footer>
                    </Card>


                </Container>

   

      </>
    )
  }
}



export default connect(
  (state) => ({
    userId: state.authReducer.userInfo.id
  }), 
  { addProductSL_Thunk, deleteItemThunk, getRecipes }
)(SliderItem);

