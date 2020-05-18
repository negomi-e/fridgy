import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getRecipes } from '../../../../../redux/Actions/fridge-actions'
import { AiOutlineDelete, AiFillEdit, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillCircleFill } from 'react-icons/bs'
import { deleteItemThunk } from '../../../../../redux/Think/fridgeThunk'
import { addProductSL_Thunk } from '../../../../../redux/Think/shoppingListThunk'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import '../SliderItem/SliderItem.css'
import backImg from './backfruit.jpg'


class SliderItem extends Component {
  render() {

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
        {/* Refact - переписать верстку и кнопки + добавить обратную связь по клику */}

        <Card>
          {/* <Card.Img variant="top" src={productImage} alt="product" /> */}
          <div className="sliderItem-imgWrap">
            <img src={backImg} alt="img" />
          </div>
          <div className="sliderItem-content">
            <Card.Title style={{ color: 'black' }}>{label}</Card.Title>

            <div className="sliderItem-status">
              <small className="text-muted"><BsFillCircleFill color={toggleColor} />  {expiryText}</small>
            </div>
          </div>
          <div className="wrapSliderItem-control">
            <div className="sliderItem-control">
              <a onClick={() => this.props.deleteItemThunk(_id, category)} variant="light">
                <AiOutlineDelete />
              </a>
              <a onClick={() => this.props.onEditTask(_id)}>
                <AiFillEdit />
              </a>
              <NavLink to={`/recipes/${label}`} onClick={() => this.props.getRecipes(label)}>
                <AiOutlinePlus />
              </NavLink>
              <a onClick={() => this.props.addProductSL_Thunk(label, this.props.userId)}>
                <AiOutlineShoppingCart />
              </a>
            </div>
          </div>

        </Card>

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

