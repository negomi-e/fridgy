import React, { Component } from 'react'
import '../ShoppingList/ShoppingList.module.scss'
import { connect } from 'react-redux'
import ProductSL from './ProductSL/ProductSL.jsx'
import { ListGroup, Container } from 'react-bootstrap'
import Form from './ControlElements/Form'
import { setProductSL_Thunk, deleteAllThunk } from '../../../redux/Thunk/shoppingListThunk'
import { ModalWindow } from '../../../components/Common/Modal/ModalWindow'
import BtnDeleteAll from './ControlElements/BtnDeleteAll'

class ShoppingList extends Component {
  componentDidMount = () => {
    this.props.setProductSL_Thunk(this.props.userId)
  }


  render() {
    const { products } = this.props
    return (
      <Container>
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

          <ModalWindow text={'Delete all'} >
            <BtnDeleteAll deleteAllThunk={this.props.deleteAllThunk} />
          </ModalWindow>


        </section >
      </Container>
    )
  }
}

export default connect(
  (state) => ({
    products: state.shoppingListReducer.products,
    userId: state.authReducer.userInfo.id
  }),
  { setProductSL_Thunk, deleteAllThunk })(ShoppingList)
