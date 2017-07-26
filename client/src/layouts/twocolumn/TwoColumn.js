import React from 'react'
import './TwoColumn.css'

const TwoColumn = React.createClass({
  render() {
    return (
        <div className="container">
          <div className="header">header</div>
          <div className="main">
            <div className="sidebar">
              <div className="title">
                <div className="label">label</div>
                <div className="actions">actions</div>
              </div>
              <div className="panel">
                sidebar-panel
              </div>
            </div>
            <div className="content">
              <div className="title">title</div>
              <div className="sub-menu">sub-menu</div>
              <div className="detail">detail</div>
            </div>
          </div>
        </div>
    )
  }
});
    
export default TwoColumn;