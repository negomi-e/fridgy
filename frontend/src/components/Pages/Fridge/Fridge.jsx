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
    
    this.props.loadFridge(id);

  }

  redirectToTarget = () => {
    this.props.history.push(`/addFridgeItem`)
  }
  
  render() {
    const categories = Object.keys(this.props.items)
    return (
      <div>
        <h2>Your fridgy</h2>
        {
          categories.map(category => {
            return <ItemsCarousel props={this.props.items[category]} />
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


