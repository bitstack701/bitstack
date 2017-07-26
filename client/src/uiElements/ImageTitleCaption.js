import React from 'react'


const ImageTitleCaption = React.createClass({

  render() {
    const {logo, title, caption, link} = this.props

    const style = {
      display: 'flex',
      alignItems: 'center'
    }

    const columnStyle = {
      display: 'flex',
      flexDirection: 'column'
    }

    const headingStyle = {
      fontSize: 28
    }

    const captionStyle = {
      fontSize: 16
    }

    const imgStyle = {
      cursor: 'pointer',
      margin: 10,
      width: 75,
      height: 75
    }

    return (
      <div style={style}>
        <a target="_blank" href={link}>
          <img style={imgStyle} src={logo}/>
        </a>
        <div style={columnStyle}>
          <span style={headingStyle}>{title}</span>
          <span style={captionStyle}>{caption}</span>
        </div>
      </div>
    )
  }
})

export default ImageTitleCaption