import React from 'react'

import logo from './logo-white.png'

const Logo = React.createClass({

  render() {
    const style = {
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center'
    }

    const columnStyle = {
      display: 'flex',
      flexDirection: 'column'
    }

    const headingStyle = {
      fontSize: 34
    }

    const captionStyle = {
      fontSize: 16
    }

    const imgStyle = {
      width: 75,
      height: 75
    }

    return (
      <div style={style}>
        <img style={imgStyle} src={logo}/>
        <div style={columnStyle}>
          <span style={headingStyle}>bitstack</span>
          <span style={captionStyle}>"it's a code thing"</span>
        </div>
      </div>
    )
  }
})

export default Logo