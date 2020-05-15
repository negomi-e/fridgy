import React, { Component } from 'react'
import { connect } from 'react-redux';

class SliderItem extends Component {
render(){
    return (
        <>
        <h3>{this.props.label}</h3>
                            <p>{this.props.expiryDate}</p>
                            <button onClick={() => this.props.onDeleteTask(this.props.id)}>Delete task</button>
                            
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
