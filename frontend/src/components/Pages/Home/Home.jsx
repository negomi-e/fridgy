import React, { Component } from 'react'
import Items from './Item/Item'
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>YOUR FRIDGE</h1>

        <Items />

        <button>Add item to fridge</button>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

      
  };
}

const mapDispatchToProps = dispatch => {
  return {
  }
};

//ADD CONNECT HERE
export default connect()(Home);
