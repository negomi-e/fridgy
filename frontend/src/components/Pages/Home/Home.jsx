import React, { Component } from 'react'
import ItemsCarousel from './Item/Item'
import { connect } from 'react-redux';
import {
  loadFridge,
} from '../../../redux/Think/fridgeThunk';

class Home extends Component {
  componentDidMount() {
    const { id } = this.props
    // console.log(email);

    this.props.loadFridge(id);


}
  render() {
    // console.log('items', this.props.items);
    const {fruit, meat, dairy} = this.props.items
  
    // console.log('fruits', fruit);
    // console.log('meat', meat);
    // console.log('dairy', dairy);
    
  
    return (
      <div>
        <h1>YOUR FRIDGE</h1>

        <ItemsCarousel props={fruit} />
        <hr />
        <ItemsCarousel props={meat}/>
        <hr />
        <ItemsCarousel props={dairy}/>
        

        <button>Add item to fridge</button>

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


export default connect(mapStateToProps, { loadFridge, })(Home);


