import React, { Component } from 'react'
import '../ShoppingList/ShoppingList.module.scss'
import { connect } from 'react-redux'
import ProductSL from './ProductSL/ProductSL.jsx'
import { ListGroup } from 'react-bootstrap'
import Form from './ControlElements/Form'
import { setProductSL_Thunk } from '../../../redux/Think/shoppingListThunk'



class ShoppingList extends Component {
  componentDidMount = () => {
    this.props.setProductSL_Thunk(this.props.userId)
  }
  // componentDidUpdate = () => {
  //   this.props.setProductSL_Thunk()
  // }


  render() {
    const { products } = this.props
    return (
      <section>
        <h2>Shopping list</h2>
        <ListGroup variant="flush">
          <div>
            <Form></Form>
          </div>
          {

            products.map(product => {
              return <ProductSL key={product._id || Symbol()} {...product} />
            })
            // < span > Not found products</span>
          }

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
