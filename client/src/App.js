import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Landing from './landing/Landing'
import Layouts from './layouts/Layouts'

import Rx from 'rxjs/Rx'

const App = React.createClass({

  getInitialState() {
    return { width: 0, height: 0 }
  },

  reportHeight() {
    let ans = {}

    if (this.mainDiv) {
      const {clientWidth, clientHeight} = this.mainDiv
      ans.clientWidth = clientWidth
      ans.clientHeight = clientHeight
    }
    return ans
  },

  componentDidMount() {
    Rx.Observable.fromEvent(window, 'resize')
      .throttleTime(300)
      .startWith('Initialise')
      .map(ans => this.reportHeight() )
      .subscribe(x => {
        this.setState({width: x.clientWidth, height: x.clientHeight})
      });
  },

  render() {
    const { width, height } = this.state

    return (
      <div ref={el => {this.mainDiv = el}} className="App">
        {this.props.children}
        {/*<Landing/>*/}
        {/*<Layouts/>*/}

{/*
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React !!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="left-sidebar">
          <div className="toggle-sidebar">&lt;</div>
          <div className="content">
            left side bar
          </div>
        </div>
        <div className="right-sidebar">right side bar</div>
        <DevConsole {...{width, height}}/>
*/}
      </div>
    )
  }
})


class DevConsole extends Component {
  render() {
    const { width, height } = this.props

    return (
      <div>
        Width: {width} Height: {height}
      </div>
    )
  }

}

export default App;
