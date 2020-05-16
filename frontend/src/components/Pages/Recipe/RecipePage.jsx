import React from 'react';
import { connect } from 'react-redux';
import { loadItems, takeItems } from '../../../redux/Actions/fridge-actions'
import RenderRecipePage from './RenderRecipePage';

class RecipePage extends React.Component {


  // async componentDidMount() {
  //   this.props.loadItems('beef');
  // }

  render() {
    console.log(this.props.itemsApi)

    return (
      <div>
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
    itemsApi: state.itemsApi,
    searchTags: state.searchTags

  };
};

const mapDispatchToProps = {
  loadItems,
  takeItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
