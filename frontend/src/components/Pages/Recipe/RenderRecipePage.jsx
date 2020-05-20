import React from 'react';
import { connect } from 'react-redux';
import { loadItems, takeItems } from '../../../redux/Actions/fridge-actions'
import "./recipe.css";
import {Button} from 'reactstrap'

class RenderRecipePage extends React.Component {


  render() {

    console.log(this.props)
    return (
      <div className='wrapped-recipe-card'>
        {this.props.itemsApi &&
          this.props.itemsApi[0].map((item) => {
            return <>
              <div className="display-container">
              <div className="display-named-items-container">
              <div className='display-named'>{item.display.displayName}</div>
              <div className="display-items">{item.content.ingredientLines.length} 
              <div className="display-ingredient">items</div></div>
              <div className="display-items">{item.content.details.totalTime} 
              <div className="display-ingredient">minutes</div></div>
              <div className="display-items">{item.content.nutrition.nutritionEstimates[0].display.value}
              <div className="display-ingredient">Calories</div>
              </div></div>
              <div className='display-image'><img className="img" style={{ borderRadius: 10 }} src={item.display.images[0]}></img></div></div>
              <div className="display-ingredient" ><div className="ingredients">Ingredients:</div> {item.content.ingredientLines.map((item) => { return <li>{item.wholeLine}</li> })}</div><br></br>
              <div><Button color="warning"><a className="display-a" target='_blank' rel='noopener noreferrer' href={item.content.details.directionsUrl}>Show Recipe!</a></Button></div>
              
             
            </>
          })}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itemsApi: state.productReducer.itemsApi,
    searchTags: state.productReducer.searchTags

  };
};



export default connect(mapStateToProps, {loadItems, takeItems})(RenderRecipePage);
