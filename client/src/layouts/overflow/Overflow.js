import React from 'react'
import ReactDom from 'react-dom'

import './Overflow.css'

const Overflow = React.createClass({
  render() {
    return (
        <div className="overflow">
          <div className="window">
            <ImageGrid/>
          </div>
        </div>
    )
  }
});

const ImageGrid = React.createClass({

  getInitialState() {
    return {
      numberOfClicks: 0,
      transitionClass: 'transition-fast'
    }
  },

  getDefaultProps() {
    return {
      height: 600
    }
  },

  scroll() {
    const { numberOfClicks } = this.state

    const imageGrid = ReactDom.findDOMNode(this.refs.imageGrid)
    const childrenCount = imageGrid.children.length
    if (numberOfClicks+1 < childrenCount) {
      this.setState({numberOfClicks: numberOfClicks+1, transitionClass: 'transition-fast'})
    } else {
      this.setState({numberOfClicks: 0, transitionClass: 'transition-slow'})
    }
  },

  render() {
    const { numberOfClicks, transitionClass } = this.state
    const { height } = this.props

    const top = ((numberOfClicks) * height) * -1

    return (
        <div ref="imageGrid" className={`image-grid ${transitionClass}`} style={{top: top}}
             onClick={this.scroll}>
          <div className="box box1">1</div>
          <div className="box box2">2</div>
          <div className="box box3">3</div>
          <div className="box box4">4</div>
          <div className="box box5">5</div>
        </div>
    )
  }
});

export default Overflow;