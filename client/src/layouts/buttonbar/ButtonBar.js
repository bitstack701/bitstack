import React from 'react'

import './ButtonBar.css'

const ButtonBar = React.createClass({
  render() {
    return (
      <div className="button-bar-container">
        <div className="button-bar-button-wrapper button-bar-arrow">
          <a className="button-bar-button" href="#">←</a>
        </div>
        <div className="button-bar-button-wrapper">
          <a className="button-bar-button" href="#">Details</a>
        </div>
        <div className="button-bar-button-wrapper">
          <a className="button-bar-button" href="#">User</a>
        </div>
        <div className="button-bar-button-wrapper">
          <a className="button-bar-button" href="#"> Logs </a>
        </div>
        <div className="button-bar-button-wrapper button-bar-arrow">
          <a className="button-bar-button" href="#">→</a>
        </div>
      </div>
    )
  }
});

export default ButtonBar;