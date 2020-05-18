import React from 'react';
import { connect } from 'react-redux';
import { loadItems, takeItems } from '../../../redux/Actions/fridge-actions'

class RenderRecipePage extends React.Component {


  render() {

    console.log(this.props)
    return (
      <div>
        <h3></h3>
        <h3>{this.props.itemsApi &&
          this.props.itemsApi[0].map((item) => {
            return <><div><h1>{item.display.displayName}</h1></div><br></br>
              <img style={{ borderRadius: 20 }} src={item.display.images[0]}></img>
              <div style={{color: "black"}}>Ingredients: {item.content.ingredientLines.map((item) => { return <li>{item.wholeLine}</li> })}</div><br></br>
              <div style={{ color: "black" }}>Ingridients: {item.content.ingredientLines.length} items</div>
              <div style={{ color: "black" }}>Total Time: {item.content.details.totalTime} </div>
              <div style={{ color: "black" }}>Total Fat Calories: {item.content.nutrition.nutritionEstimates[0].display.value}Cal</div>
              <div><a target='_blank' rel='noopener noreferrer' href={item.content.details.directionsUrl}><h2>Show Recipe!</h2></a></div>
            </>
          })}</h3>

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
