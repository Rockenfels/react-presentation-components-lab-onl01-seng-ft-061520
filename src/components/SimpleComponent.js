// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
  constructor(){
    super()
    this.state = {
      mood: 'happy'
    }
  }

  render(){
    return(<div onClick={this.handleInput}>{this.state.mood}</div>)
  }
  handleInput = () => {
    let current  = this.state.mood;
    current  === 'happy' ? this.setState({mood: 'sad'}) :  this.setState({mood: 'happy'});
  }
}
