import React from 'react'

import ReactLogo from './logos/react.svg'
import mobxLogo from './logos/mobx.png'
import rxjsLogo from './logos/rxjs.png'
import socketioLogo from './logos/socketio.png'
import nodeLogo from './logos/nodejs.svg'
import rabbitLogo from './logos/rabbitMq.png'
import postgresLogo from './logos/postgreSQL.svg'
import redisLogo from './logos/redis.svg'
import paperTrailLogo from './logos/papertrail.svg'
import zeitLogo from './logos/zeit.svg'

import ImageTitleCaption from '../uiElements/ImageTitleCaption'

const GettingStarted = React.createClass({

  render() {
    const style = {
      width: '100vw',
      height: '100vh',

      display: 'flex',
      flexDirection: 'column'
    }

    const headerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

    const contentStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      flex: 1

    }

    const cardStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      flex: 1,
      fontSize: 24,
      minHeight: 200,
      minWidth: 450,
      maxWidth: '80%',
      backgroundColor: 'rgba(0,0,0, 0.2)',
      borderRadius: 15,
      margin: 10
    }

    const cardTitleStyle = {
      textAlign: 'center',
      fontSize: 24,
      width: '100%',
    }

    const cardBody = {
      fontSize: 16,
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      textAlign: 'center'
    }

    return (
      <div style={style}>
        {/*<div style={headerStyle}>*/}
          {/*<h1>Getting started</h1>*/}
        {/*</div>*/}
        <div style={contentStyle}>
          <div style={cardStyle}>

            <span style={cardTitleStyle}>
              <h2>Get the ball rolling.</h2>
            </span>

            <div style={cardBody}>
              <p>
                Check out the github repo. This will be the starting point for our app.
              </p>
              <p>
                Use the <a target="_blank" href="https://github.com/facebookincubator/create-react-app">create react app</a> as a starting point.
              </p>
              <p>
                Once you have a basic app working we will get it up and running online.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default GettingStarted