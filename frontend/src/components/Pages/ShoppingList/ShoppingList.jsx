import React, { Component } from 'react'
import '../ShoppingList/ShoppingList.module.scss'
import { connect } from 'react-redux'
import ProductSL from './ProductSL/ProductSL.jsx'
import { ListGroup } from 'react-bootstrap'
import Form from './ControlElements/Form'
import { setProductSL_Thunk } from '../../../redux/Thunk/shoppingListThunk'



class ShoppingList extends Component {
  componentDidMount = () => {
    this.props.setProductSL_Thunk(this.props.userId)
  }


  render() {
    const { products } = this.props
    return (
      <section className="shoppinglist">
        <h2>Shopping list</h2>
        <ListGroup variant="flush">
          <div>
            <Form></Form>
          </div>
          <div classname="list-body">
          {

            products.map(product => {
              return <ProductSL key={product._id || Symbol()} {...product} />
            })
            // < span > Not found products</span>
          }
          </div>

        </ListGroup>
      </section >
    )
  }
}

export default connect(
  (state) => ({
    products: state.shoppingListReducer.products,
    userId: state.authReducer.userInfo.id
  }),
  { setProductSL_Thunk })(ShoppingList)
