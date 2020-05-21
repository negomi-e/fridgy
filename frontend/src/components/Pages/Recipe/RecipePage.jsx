import React from 'react';
import { connect } from 'react-redux';
import { loadItems, takeItems } from '../../../redux/Actions/fridge-actions'
import RenderRecipePage from './RenderRecipePage';
import './recipe.css';


class RecipePage extends React.Component {


  async componentDidMount() {
    this.props.loadItems(this.props.label);
  }

  render() {
    console.log(this.props.label, 'THIS CONSOLE FOR RECIPE COMPONENT')

    return (
      <div className="div-display-named">
        <h2>Просрочка:</h2>
        {this.props.searchTags.map((item) => {
          return <button style={{ marginRight: 10 }}
            onClick={() => this.props.loadItems(item)}
          >{item}</button>
        })}
        <RenderRecipePage />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itemsApi: state.productReducer.itemsApi,
    searchTags: state.productReducer.searchTags,
    label: state.productReducer.label
  };
};



export default connect(mapStateToProps, {loadItems, takeItems})(RecipePage);
