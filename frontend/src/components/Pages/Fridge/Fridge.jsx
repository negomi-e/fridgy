import React, { Component } from 'react'
import ItemsCarousel from './Item/Item'
import { connect } from 'react-redux';
// import { useHistory } from "react-router-dom";
// import history from '././history'
import AddFridgeItem from '../../Pages/AddFridgeItem/AddFridgeItem';
import {
  loadFridge,
} from '../../../redux/Thunk/fridgeThunk';

class Fridge extends Component {
  componentDidMount() {
    const { id } = this.props
    this.props.loadFridge(id);
  }

  redirectToTarget = () => {
    this.props.history.push(`/addFridgeItem`)
  }

  render() {
    const { items = [] } = this.props
    const categories = []

    for (let i = 0; i < items.length; i++) {
      if (!categories.includes(items[i].category))
        categories.push(items[i].category)
    }

    const sortProduct = items.reduce((accum, currentItem, arr) => {
      const categoryName = currentItem.category
      if (!accum[categoryName]) {
        accum[categoryName] = []
      }
      accum[categoryName].push(currentItem)
      return accum
    }, {})

    return (
      <div>
        <h2>Your fridgy</h2>
        <AddFridgeItem />
        {
          categories.map(category => {
            return <ItemsCarousel data={sortProduct[category]} />
          })
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    //key is your prop name and it's value from global state
    items: state.productReducer.items,
    error: state.productReducer.listError,
    id: state.authReducer.userInfo.id
  };
}


export default connect(mapStateToProps, { loadFridge, })(Fridge);


