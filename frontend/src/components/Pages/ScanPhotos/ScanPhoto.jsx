import React, { Component } from 'react';

import { connect } from 'react-redux'
import ItemModal from '../../Common/Modal/ItemModal'
import { Container, Button, Form, InputGroup, FormControl } from 'react-bootstrap'
import Preloader from '../../Common/Preloader/Preloader.jsx'

class ScanPhoto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
      imgsrc: '',
      update: false,
      open: false,
      isSelectDateOpen: false,
      expiryDate: new Date(),
      dayRemaining: 0,
      tempLabels: [],
      tempDates: [],
      isHidden: true,
      loaded: false,
    }
  }


  setLabel(label) {


    console.log('pre',label)
    this.setState({label: label})
    console.log('post', this.state.label);
    
  }

  setDate(date) {
    

    console.log(date)
    console.log(new Date(date))
    this.setState({ expiryDate: new Date(date)})
  
  }


  async scanPhoto(event) {
    event.preventDefault()
    // this.setState({loaded:true })
    const formData = new FormData(event.target)

    let request = await fetch(`/upload`, {
      method: 'POST',
      headers: {
      },
      body: formData,
    })
    let response = await request.json()
    this.setState({ loaded: false, tempLabels: response.labels, tempDates: response.dates, isHidden: false })
  
  }

  setOpen = () => { this.setState({ open: !this.state.open }) };

  render() {
    return (
      <Container>
        {this.state.open ? <ItemModal props={this.state} /> : null}

        <section className="scan-image-block shadowed-box">
          <div>
          <h2>SCAN YOUR ITEM</h2>

          <form className="scanform" onSubmit={this.scanPhoto.bind(this)} encType='multipart/form-data'>
            <input type='file' name='image' />
            <input type='submit' />
          </form>
          {/* {this.state.loaded? <Preloader />: null } */}
          {!this.state.isHidden ? (
          <div className="scan-results" >
          <label >SELECT CORRECT ITEM</label>
          {this.state.tempLabels ? this.state.tempLabels.map(label => (
            <p><a href='#' onClick={() => this.setLabel(label)}>{label}</a></p>)) : null}
          <hr />

          <label >SELECT EXPIRY DATE</label>
          {this.state.tempDates ? this.state.tempDates.map(date => (
            <p><a href='#' onClick={() => this.setDate(date)}>{date}</a></p>)) : null}
          </div>): null}

          <Button onClick={this.setOpen}>Add Item</Button>
          </div>
        </section>
      </Container>

    )
  }
}

export default connect()(ScanPhoto)
