import React, { Component } from 'react'

import { connect } from 'react-redux';
import { CardGroup, Card, Image } from 'react-bootstrap'
import fridgeimg from '../../../images/features/mainpage-fridge1.jpg'
import recipeimg from '../../../images/features/mainpage-recipe1.jpg'
import shoppinglistimg from '../../../images/features/mainpage-shoppinglist1.jpg'




class Features extends Component {

    render() {

        const features = [{
            title: 'Personal Shopping List',
            body: 'This is allows to create a dynamic shopping list once you finish a product or notice you are lacking an ingredient for your next delicious meal.',
            image: shoppinglistimg
        },
        {
            title: 'Your fridge',
            body: 'We have designed a location where you can add, store and monitor all the products in your fridge. Say no to rotten food and mouldy products. Use our product to ensure you\'ll never lose track of what is in your fridge.',
            image: fridgeimg
        },
        {
            title: 'Recipe Generator',
            body: 'Feeling peckish? Don\'t know what to make out of your ingredients. Fear not, we have designed a recipe generator that will search for the perfect dish using your ingredients that need to be eaten up ASAP as well as any of your favourite items.',
            image: recipeimg
        }]

        return (

            <div className="features-banner">
                <hr />
                <div className="title-bar">

                    <h2>OUR FEATURES</h2>
                    <span>We aim to use barcode and RFID technology to introduce good practices conducive to food waste reduction, with an expected long-term socio and economic impact. We strongly believe ever small step you take to reduce your waste, can have a huge impact on your environment.</span>
                </div>

                <div className="features-block">
                    <CardGroup>
                        {features.map(feature => {
                            return (
                                <Card className="feature-item" >
                                    <Image 
                                      variant="top" src={feature.image} roundedCircle/>
                                    <Card.Text style={{padding:'10px'}}>
                                        <h3>{feature.title}</h3>
                                        <p >
                                            {feature.body}
                                        </p>
                                    </Card.Text>
                                </Card>
                            )
                        })}
                    </CardGroup>
                </div>

            </div>




        )
    }
}


export default connect()(Features);