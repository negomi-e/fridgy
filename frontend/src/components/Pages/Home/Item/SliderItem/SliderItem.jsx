import React, { Component } from 'react'
import { connect } from 'react-redux';
import { AiOutlineDelete, AiFillEdit, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai'
// import { Container, Row, Col } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';
import '../SliderItem/SliderItem.module.scss'

class SliderItem extends Component {
    render() {
        console.log(this.props.props);

        const { label, expiryDate } = this.props.props


        return (
            <>
            <Container>
                <h3>{label}</h3>
                <p>{expiryDate}</p>
                
                    <Row className="justify-content-md-center">
                        <Col xs lg="1" onClick={() => this.props.onDeleteTask(this.props.id)}><AiOutlineDelete /></Col>
                        <Col xs lg="1"><AiFillEdit /></Col>
                        <Col xs lg="1"><AiOutlinePlus /></Col>
                        <Col xs lg="1"><AiOutlineShoppingCart /></Col>
                    </Row>
                </Container>





                {/* <button onClick={()=>this.props.onEditTask(id)}>Edit task</button>
            <button onClick={()=>this.props.onAddShopping(id)}>Add to shopping list</button> */}
            </>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         // onDeleteTask: (id) => dispatch({ type: DELETE_ITEM, elementID: id }),
//         // onEditTask: (id) => dispatch({ type: actionTypes.EDIT_ITEM, elementID: id }),
//         // onAddShopping: (id) => dispatch({ type: actionTypes.ADD_ITEM, elementID: id }),
//     }
// };

export default connect()(SliderItem);
