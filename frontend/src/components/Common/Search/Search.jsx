import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
export default class Search extends Component {
  render() {
    return (
      <div>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    )
  }
}
