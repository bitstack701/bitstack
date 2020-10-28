import React from 'react'

import Logo from 'logo/Logo'
// import Intro from './Intro'

const Home = () => {

  return (
    <div>
      <Logo/>
      <Splash/>
      {/*<Intro/>*/}
    </div>
  )
}


const Splash = () => {
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


export default Home
