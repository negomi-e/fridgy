import React, { Component } from 'react'
import { connect } from 'react-redux';
import { AiOutlineDelete, AiFillEdit, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai'
// import { Icon } from 'react-native-elements'
import {BsFillCircleFill} from 'react-icons/bs'

import { Container, Row, Col } from 'react-bootstrap';
import '../SliderItem/SliderItem.module.scss'

class SliderItem extends Component {
    render() {
        // console.log(this.props.props);

        const { label, dayRemaining, _id } = this.props.props

        let expiryText = '';
        let toggleColor;

        //TEXT DISPLAYED
        if(dayRemaining <= 0){
            expiryText = 'Item has expired'
        }else{
            expiryText = dayRemaining + ' days left'
        }

        //COLOUR CHANGE
        if(dayRemaining <= 2){
            toggleColor = '#FF0000'
        }else if (dayRemaining >= 3 && dayRemaining < 5){
            toggleColor = '#FF8C00'
        }else{
            toggleColor = '#228B22'
        }


        return (
            <>
            <Container>
                <h3>{label}</h3>
                <p><BsFillCircleFill color={toggleColor} />  {expiryText}</p>
                
                    <Row className="justify-content-md-center">
                        <Col xs lg="1" onClick={() => this.props.onDeleteTask(_id)}><AiOutlineDelete /></Col>
                        <Col xs lg="1" onClick={()=>this.props.onEditTask(_id)}><AiFillEdit /></Col>
                        <Col xs lg="1" onClick={()=>this.props.getRecipes(_id)}><AiOutlinePlus /></Col>
                        <Col xs lg="1" onClick={()=>this.props.onAddShopping(_id)}><AiOutlineShoppingCart /></Col>
                    </Row>
                </Container>

            </>
        )
    }
}

//ACTION FUNCTION NEED TO WRITTEN
// const mapDispatchToProps = dispatch => {
//     return {
//         onDeleteTask: (id) => dispatch({ type: DELETE_ITEM, elementID: id }),
//         onEditTask: (id) => dispatch({ type: actionTypes.EDIT_ITEM, elementID: id }),
//         onAddShopping: (id) => dispatch({ type: actionTypes.ADD_ITEM, elementID: id }),
//         getShopping: (id) => dispatch({ type: actionTypes.FIND_SHOPPING, elementID: id }),
//     }
// };

export default connect()(SliderItem);
