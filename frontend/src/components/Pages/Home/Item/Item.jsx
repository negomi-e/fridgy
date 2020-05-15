import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    loadFridge,
} from '../../../../redux/Actions/fridge-actions';

class Items extends Component {

    async componentDidMount() {
        this.props.loadFridge();
    }

    render() {

        const { label, expiryDate, id } = this.props.item

        return (
            <>
                <ul id="fridge-table">
                    {this.props.list.length ? this.props.list.map(item => (
                        <div className="fridge-item">
                            <h3>{label}</h3>
                            <p>{expiryDate}</p>
                            <button onClick={() => this.props.onDeleteTask(id)}>Delete task</button>
                            {/* <button onClick={()=>this.props.onEditTask(id)}>Edit task</button>
            <button onClick={()=>this.props.onAddShopping(id)}>Add to shopping list</button> */}
                        </div>


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
        items: state.items,
        error: state.listError,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loadFridge,
        // onDeleteTask: (id) => dispatch({ type: DELETE_ITEM, elementID: id }),
        // onEditTask: (id) => dispatch({ type: actionTypes.EDIT_ITEM, elementID: id }),
        // onAddShopping: (id) => dispatch({ type: actionTypes.ADD_ITEM, elementID: id }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);