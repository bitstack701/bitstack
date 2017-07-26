import React from 'react'

import Logo from '../logo/Logo'
import Intro from './Intro'
import GettingStarted from './GettingStarted'

const Home = React.createClass({

  render() {
    const style = {}

    return (
      <div style={style}>
        <Logo/>
        <Splash/>
        <Intro/>
        {/*<GettingStarted/>*/}
      </div>
    )
  }
})


const Splash = React.createClass({

  render() {
    const style = {
      width: '100vw',
      height: '100vh',
      backgroundImage: 'url("/stock1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return (
      <div style={style}/>
    )
  }
})


export default Home;