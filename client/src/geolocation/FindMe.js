import React from 'react'

const FindMe = React.createClass({

  getInitialState() {
    return {
      position: undefined
    }
  },

  componentWillMount() {
    const { socket } = this.props
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        if (socket) {
          const { coords, timestamp } = position
          const { latitude, longitude, heading, speed } = coords

          console.log('I can see the socket', position);
          socket.emit('position updated', { coords: {latitude, longitude, heading, speed}, timestamp})
        }

        this.setState({position})
      }, (err) => {
        console.err('Error: The Geolocation service failed.', err)
      })
    } else {
      // Browser doesn't support Geolocation
      console.log('Error: Your browser doesn\'t support geolocation.');
    }
  },
  
  render() {
    const { position } = this.state
    let view = <div>Loading</div>

    if (position) {
      const { coords, timestamp } = position
      const { latitude, longitude, heading, speed } = coords
      console.log(position)
      view =
        <div>
          Latitude: {latitude} <br/>
          Longatude: {longitude} <br/>
          Heading: {heading} <br/>
          Speed: {speed} <br/>
          Last updated: {new Date(timestamp).toString()} <br/>
        </div>
    }

    return view
  }
});

export default FindMe;