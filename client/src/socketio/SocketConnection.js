import React from 'react'
import io from 'socket.io-client'

const SocketConnection = React.createClass({

  socket: undefined,

  getInitialState() {
    return {
      socket: undefined
    }
  },

  componentWillMount() {
    console.info('Opening socketIO connection');
/*
    const socket = io()

    socket.emit("I am", {userId: 701, handle: "toothpick"})

    socket.on('chat message', (msg) => {
      this.setState({messages: messageList.push(msg)})
    })

    this.socket = socket
*/
  },

  loginComplete(nickname) {
    const socket = io()
    socket.emit("I am", {handle: nickname})
    this.setState({socket: socket})
  },

  render() {
    const { socket } = this.state

    let view = <Login loginComplete={this.loginComplete}/>
    if (socket) {
      view = React.cloneElement(this.props.children, {socket})
    }

    return view
  }
});

const Login = React.createClass({

  send(e) {
    if (e.keyCode === 13) {
      const nickname = this.nickName.value
      console.log(nickname);
      const { loginComplete } = this.props
      loginComplete(nickname)
    }
  },

  render() {
    return (
        <div>
          <input ref={me=>this.nickName = me} placeholder="What is your nickname?" onKeyUp={this.send}/>
        </div>
    )
  }
});

export default SocketConnection;