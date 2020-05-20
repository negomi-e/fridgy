import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getRecipes } from '../../../../../redux/Actions/fridge-actions'
import { AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillCircleFill } from 'react-icons/bs'
import { deleteItemThunk } from '../../../../../redux/Thunk/fridgeThunk'
import { addProductSL_Thunk } from '../../../../../redux/Thunk/shoppingListThunk'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import { IoIosListBox, IoIosTrash } from "react-icons/io";
import '../SliderItem/SliderItem.css'


class SliderItem extends Component {
  render() {
    const { label, dayRemaining, _id } = this.props.data

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
        <div className="sliderItem-close">
          <a onClick={() => this.props.deleteItemThunk(_id)} variant="light"><IoIosTrash /></a>
        </div>



        <div className="sliderItem-content">
          <h2 className="sliderItem-title">{label}</h2>

          <div className="sliderItem-status">
            <small className="text-muted"><BsFillCircleFill color={toggleColor} />{expiryText}</small>
          </div>

        </div>
        <div className="wrapSliderItem-control">


          <a onClick={() => this.props.onEditTask(_id)}>
            <IoIosListBox />
          </a>
          <NavLink to={`/recipes/${label}`} onClick={() => this.props.getRecipes(label)}>
            <AiOutlinePlus />
          </NavLink>
          <a onClick={() => this.props.addProductSL_Thunk(label, this.props.userId)}>
            <AiOutlineShoppingCart />
          </a>

        </div>

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

