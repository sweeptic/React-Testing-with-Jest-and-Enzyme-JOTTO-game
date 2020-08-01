import React, { Component } from 'react'
import Congrats from './Congrats/Congrats'

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      success: false
    }
  }

  render() {
    return (
      <div data-test='component-app'>
        <Congrats success={false} />
      </div>
    )
  }
}
