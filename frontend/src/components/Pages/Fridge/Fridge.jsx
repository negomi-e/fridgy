import React, { Component } from 'react'
import ItemsCarousel from './Item/Item'
import { connect } from 'react-redux';
// import { useHistory } from "react-router-dom";
// import history from '././history'
import {
  loadFridge,
} from '../../../redux/Thunk/fridgeThunk';

class Fridge extends Component {
  componentDidMount() {
    const { id } = this.props
    // console.log(email);

    this.props.loadFridge(id);

  }

  redirectToTarget = () => {
    this.props.history.push(`/addFridgeItem`)
  }
  
  render() {
    // console.log('items', this.props.items);
    const { Fruit, Meat, Dairy } = this.props.items
    

    return (
      <div>
        <h1>YOUR FRIDGE</h1>

        <ItemsCarousel props={Fruit} />
        <hr />
        <ItemsCarousel props={Meat} />
        <hr />
        <ItemsCarousel props={Dairy} />

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


