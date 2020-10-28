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

import ImageTitleCaption from 'uiElements/ImageTitleCaption'

const Intro = () => {

  const style = {
    width: '100vw',
    minHeight: '100vh',

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
    maxWidth: 450,
    backgroundColor: 'rgba(0,0,0, 0.2)',
    borderRadius: 15,
    margin: 10
  }

  const cardTitleStyle = {
    fontSize: 24,
    // minHeight: 150,
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
      <div style={headerStyle}>
        <h1>Meet the stack</h1>
      </div>
      <div style={contentStyle}>
        <div style={cardStyle}>

            <span style={cardTitleStyle}>
              <ImageTitleCaption title="React" caption="The view layer"
                                 logo={ReactLogo}
                                 link="https://github.com/facebook/react"/>

            </span>

          <div style={cardBody}>
            <p>Uses a Virtual DOM to keep things fast.</p>
            <p>Reduces state to render a view, whenever state changes and only the diffs get rendered.</p>
          </div>
        </div>
        <div style={cardStyle}>
            <span style={cardTitleStyle}>
              <ImageTitleCaption title="Mobx" caption="Simple scalable state management"
                                 logo={mobxLogo}
                                 link="https://github.com/mobxjs/mobx"/>
            </span>

          <div style={cardBody}>
            <p>It is hard for me to explain why I like Mobx, I just do.</p>
            <p>Take a look at the docs and watch the egghead.io videos.</p>
          </div>
        </div>

        <div style={cardStyle}>
            <span style={cardTitleStyle}>
              <ImageTitleCaption title="RxJs" caption="Because everything is a stream"
                                 logo={rxjsLogo}
                                 link="https://github.com/ReactiveX/rxjs"/>
            </span>

          <div style={cardBody}>
            <p>
              RxJS is a library for reactive programming using Observables, to make it easier to compose
              asynchronous or callback-based code.
            </p>
          </div>
        </div>

        <div style={cardStyle}>
            <span style={cardTitleStyle}>
              <ImageTitleCaption title="socket.io" caption="Takes care of the web sockets"
                                 logo={socketioLogo}
                                 link="https://github.com/socketio/socket.io/"/>
            </span>

          <div style={cardBody}>
            <p>
              Socket.IO enables real-time bidirectional event-based communication.
              It works on every platform, browser or device, focusing equally on reliability and speed.
            </p>
          </div>
        </div>

        <div style={cardStyle}>
            <span style={cardTitleStyle}>
              <ImageTitleCaption title="nodeJS" caption="For the server side of things"
                                 logo={nodeLogo}
                                 link="https://github.com/nodejs/node"/>
            </span>

          <div style={cardBody}>
            <p>
              Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven,
              non-blocking I/O model that makes it lightweight and efficient.
            </p>
          </div>
        </div>
        <div style={cardStyle}>
            <span style={cardTitleStyle}>
              <ImageTitleCaption title="RabbitMQ" caption="Messaging that just works"
                                 logo={rabbitLogo}
                                 link="https://www.cloudamqp.com/"/>
            </span>

          <div style={cardBody}>
            <p>
              Message queues have many use cases, they help defer slow tasks, as layer for system integration,
              enable more flexible server deployment etc...
            </p>
          </div>
        </div>
        <div style={cardStyle}>
            <span style={cardTitleStyle}>
              <ImageTitleCaption title="PostgresSQL" caption="No we can remember stuff"
                                 logo={postgresLogo}
                                 link="https://www.elephantsql.com/"/>
            </span>

          <div style={cardBody}>
            <p>
              A database
            </p>
          </div>
        </div>
        <div style={cardStyle}>
            <span style={cardTitleStyle}>
              <ImageTitleCaption title="redis.io" caption="In memory cache"
                                 logo={redisLogo}
                                 link="https://redislabs.com/"/>
            </span>

          <div style={cardBody}>
            <p>
              so useful
            </p>
          </div>

        </div>
        <div style={cardStyle}>
            <span style={cardTitleStyle}>
              <ImageTitleCaption title="papertrail" caption="Making sense of all the logs"
                                 logo={paperTrailLogo}
                                 link="https://papertrailapp.com/"/>
            </span>

          <div style={cardBody}>
            <p>
              Stores server side logs.
            </p>
          </div>
        </div>
        <div style={cardStyle}>
            <span style={cardTitleStyle}>
              <ImageTitleCaption title="now" caption="Cloud deployment made Simple, Global and Realtime"
                                 logo={zeitLogo}
                                 link="https://zeit.co/now"/>
            </span>

          <div style={cardBody}>
            <p>
              Make Cloud Computing as Easy and Accessible as Mobile computing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
