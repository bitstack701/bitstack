import React from 'react'
import io from 'socket.io-client'

const Chat = React.createClass({

  socket: undefined,

  getInitialState() {
    return {
      messageList: []
    }
  },

  componentWillMount() {
    console.info('Opening socketIO connection');
    // const socket = io(window.location.origin, {reconnectionDelayMax: 30000})
    const socket = io()

    socket.emit("I am", {userId: 701, handle: "toothpick"})

    const { messageList } = this.state

    socket.on('chat message', (msg) => {
      this.setState({messages: messageList.push(msg)})
    })

    this.socket = socket
  },

  send() {
    console.log('Send Clicked');
    this.socket.emit('chat message', this.messageInput.value)
    this.messageInput.value = ''
  },

  render() {
    const { messageList } = this.state
    const messages = messageList.map((m, i) => {
      return <li key={`msg-${i}`}>{m}</li>
    })

    return (
        <div>
          <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
            { messages }
          </ul>
          <input ref={me=>this.messageInput = me}/>
          <button onClick={this.send} >Send</button>
        </div>
    )
  }
});

export default Chat;