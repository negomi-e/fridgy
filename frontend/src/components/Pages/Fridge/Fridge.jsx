import React, { Component } from 'react'
import ItemsCarousel from './Item/Item'
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap'
import fridgyTopImg from '../../../images/fridgyTop.png'
import AddFridgeItem from '../../Pages/AddFridgeItem/AddFridgeItem';
import Search from '../../Common/Search/Search.jsx'
import fridgyBottom from '../../../images/frifgyBottom.png'
import { loadFridge } from '../../../redux/Thunk/fridgeThunk';

class Fridge extends Component {
  componentDidMount() {
    const { id } = this.props
    this.props.loadFridge(id);
  }

  redirectToTarget = () => {
    this.props.history.push(`/addFridgeItem`)
  }

  render() {
    const { items = [] } = this.props
    const categories = []

    for (let i = 0; i < items.length; i++) {
      if (!categories.includes(items[i].category))
        categories.push(items[i].category)
    }

    const sortProduct = items.reduce((accum, currentItem, arr) => {
      const categoryName = currentItem.category
      if (!accum[categoryName]) {
        accum[categoryName] = []
      }
      accum[categoryName].push(currentItem)
      return accum
    }, {})

    for (const key in sortProduct) {
      sortProduct[key].sort((a, b) => {
        if (a.dayRemaining > b.dayRemaining) {
          return 1
        }
        if (a.dayRemaining < b.dayRemaining) {
          return -1
        }
        return 0
      })
    }


    return (
      <Container>
        <div className="fridge">
          <div className="frifgy-wrap-top">
            <img className="frifgy-img-top" src={fridgyTopImg} alt='img' />
            <div className="frifgy-wrap-top-control">
              <h2>Your fridgy</h2>
              <AddFridgeItem />
              <Search />
            </div>
          </div>
          <div className="frifgy-wrap-top-control-mobile">
            <Search />
            <AddFridgeItem />
          </div>
          {
            categories.length > 0
              ?
              categories.map((category, i) => {
                return <ItemsCarousel key={'category' + i} data={sortProduct[category]} />
              })
              : <ItemsCarousel />
          }
          <div className="frifgy-wrap-bottom">
            <img className="frifgy-img-top" src={fridgyBottom} alt='img' />
          </div>


        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.productReducer.items,
    error: state.productReducer.listError,
    id: state.authReducer.userInfo.id
  };
}


export default connect(mapStateToProps, { loadFridge })(Fridge);


