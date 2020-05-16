import React, { Component } from 'react'
import { connect } from 'react-redux';

import Carousel from 'react-bootstrap/Carousel'
import sliderimg from '../../../../images/slideblack.png'
import '../Item/Item.module.scss'
import SliderItem from '../Item/SliderItem/SliderItem'

class Items extends Component {

    render() {
        // EXPIRY DATE CODE
        // let times = []
        // if (this.props.items.length > 0) {
        //     let array = this.props.items
        //     console.log('array', array);
        //     array.forEach((item) => {
        //         let exp = new Date(item.expiryDate)
        //         let current = new Date()
        //         // console.log(exp);
        //         // console.log(new Date());

        //         let differenceTIME = exp - current
        //         let diferenceDay = Math.floor(differenceTIME / (1000 * 3600 * 24))
        //         return times.push(diferenceDay)
        //     })
        //     console.log('daysss', times);
        // }
        

        const items = this.props.props
        console.log(items)

        return (
            <Carousel>
                {items ? items.map(item => (
                    <Carousel.Item key={item.id}>
                        <img className="d-block w-100"
                            src={sliderimg}
                            alt="slide" />
                        <Carousel.Caption>
                            <SliderItem props={item} />
                        </Carousel.Caption>
                    </Carousel.Item>
                )) : <Carousel.Item>
                        <img className="d-block w-100"
                            src={sliderimg}
                            alt="slide" />
                        <Carousel.Caption>
                            <div>No items available</div>
                        </Carousel.Caption>
                    </Carousel.Item>}

                {this.props.error && <Carousel.Item>
                    <img className="d-block w-100"
                        src={sliderimg}
                        alt="slide" />
                    <Carousel.Caption>
                        <div className="error">{this.props.error}</div>
                    </Carousel.Caption>
                </Carousel.Item>}

            </Carousel>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.productReducer.listError,
    }
}

export default connect(mapStateToProps)(Items);