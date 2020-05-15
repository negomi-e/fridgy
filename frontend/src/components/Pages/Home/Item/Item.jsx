import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    loadFridge,
} from '../../../../redux/Think/fridgeThunk';

class Items extends Component {

    componentDidMount() {
        const {id} = this.props
        // console.log(email);
        
        this.props.loadFridge(id);
    }

    render() {

        // const { label, expiryDate, id } = this.props.items

        return (
            <>
                <ul id="fridge-table">
                    {this.props.items.length ? this.props.items.map(item => (
                        <li id={item.id}>
                        <div className="fridge-item">
                            <h3>{item.label}</h3>
                            <p>{item.expiryDate}</p>
                            <button onClick={() => this.props.onDeleteTask(item._id)}>Delete task</button>
                            {/* <button onClick={()=>this.props.onEditTask(id)}>Edit task</button>
            <button onClick={()=>this.props.onAddShopping(id)}>Add to shopping list</button> */}
                        </div>
                        </li>


                    )) : <div>No items available</div>}
                </ul>

                {this.props.error && <div className="error">{this.props.error}</div>}

            </>
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

const mapDispatchToProps = dispatch => {
    return {
        // onDeleteTask: (id) => dispatch({ type: DELETE_ITEM, elementID: id }),
        // onEditTask: (id) => dispatch({ type: actionTypes.EDIT_ITEM, elementID: id }),
        // onAddShopping: (id) => dispatch({ type: actionTypes.ADD_ITEM, elementID: id }),
    }
};

export default connect(mapStateToProps, {loadFridge,})(Items);