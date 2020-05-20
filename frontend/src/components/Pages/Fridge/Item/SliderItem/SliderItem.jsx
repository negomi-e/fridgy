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

import backImg from './backfruit.jpg'

import ItemModal from '../../../../Common/Modal/ItemModal'

import FruitBasket from '../../../../../images/imgArt/fruit.png'
import MeatBasket from '../../../../../images/imgArt/beef.png'
import DairyBasket from '../../../../../images/imgArt/milk.png'
import VeganBasket from '../../../../../images/imgArt/vegan.png'
import OtherBasket from '../../../../../images/imgArt/other.png'


class SliderItem extends Component {
  state = {
    open: false,
    update: true,

    id: this.props.data._id,
    label: this.props.data.label,
    expiryDate: this.props.data.expiryDate,
    dayRemaining: this.props.data.dayRemaining,
    category: this.props.data.category,
  }

  setOpen = () => { this.setState({ open: !this.state.open }) };

  render() {
    const { label, dayRemaining, _id, category } = this.props.data

    let expiryText = '';
    let toggleColor;

    //TEXT DISPLAYED
    if (dayRemaining <= 0) {
      expiryText = ' Item has expired'
    } else {
      expiryText = ' ' + dayRemaining + ' days left'
    }

    //COLOUR CHANGE
    if (dayRemaining <= 2) {
      toggleColor = '#FF0000'
    } else if (dayRemaining >= 3 && dayRemaining < 5) {
      toggleColor = '#FF8C00'
    } else {
      toggleColor = '#228B22'
    }

    const categoryImg = {
      "Fruit": FruitBasket,
      "Meat": MeatBasket,
      "Diary": DairyBasket,
      "Other": OtherBasket,
      "Vegetables": VeganBasket,
    }

    return (
      <>
        {this.state.open ? <ItemModal props={this.state} /> : null}
        <div className="sliderItem-imgCategory">
          <h4>{category}</h4>
          <img src={categoryImg[category]} />
        </div>


        <div className="sliderItem-close">
          <a onClick={() => this.props.deleteItemThunk(_id)} variant="light"><IoIosTrash /></a>
        </div>

        <div className="sliderItem-content">
          <h2 className="sliderItem-title">{label}</h2>
          <div className="sliderItem-status">
            <small className="text-muted"><BsFillCircleFill color={toggleColor} /> {expiryText}</small>
          </div>

        </div>
        <div className="wrapSliderItem-control">


          <a onClick={this.setOpen}>
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

