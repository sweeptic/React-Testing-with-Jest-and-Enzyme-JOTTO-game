import React, { Component } from 'react'
import Congrats from './Congrats/Congrats'

export default class App extends Component {
  render() {
    return (
      <div data-test='component-app'>
        <Congrats />
      </div>
    )
  }
}
