import React from 'react';
import { connect } from 'react-redux';
import { loadItems, takeItems } from '../../../redux/Actions/fridge-actions'
import RenderRecipePage from './RenderRecipePage';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import './recipe.css';


class RecipePage extends React.Component {

  state = {
    searchText: '',
  }


  async componentDidMount() {
    this.props.loadItems(this.props.label);
  }

  onChange = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.loadItems(this.state.searchText)
    this.setState({
      searchText: ''
    })
  }

  render() {
    console.log(this.props.items, 'THIS CONSOLE FOR RECIPE COMPONENT')

    return (
      <div className="div-display-named">
        <div className="display-item-expired">Your item has expired:</div>
        {this.props.searchTags.map((item) => {
          return <Button color='warning' style={{ marginRight: 10 }}
            onClick={() => this.props.loadItems(item)}
          >{item}</Button>
        })}
        <div className="display-search-form">
          <Form inline
          onSubmit={this.onSubmit}
        >
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="display-ingredient">Search Recipe</Label>
            <Input type="text" placeholder="type you search word" onChange={this.onChange} value={this.state.searchText} />
          </FormGroup>
          <Button color='warning' type='submit'>Search</Button>
        </Form>
        </div>
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



export default connect(mapStateToProps, { loadItems, takeItems })(RecipePage);
