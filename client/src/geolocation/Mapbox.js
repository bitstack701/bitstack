import React from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

import './Mapbox.css'

const Mapbox = React.createClass({

  componentDidMount() {
    const { socket } = this.props

    if (socket) {
      socket.on('position updated', (data) => {
        console.log('position updated',data);
        if (map) {
          const { handle, position} = data
          const { coords, timestamp } = position
          const { longitude, latitude, heading, speed } = coords

          map.panTo([longitude, latitude], {duration: 2000})
          marker.setLngLat([longitude, latitude])
        }
      })
    }

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9ubGFpbGFtIiwiYSI6ImVkZGNjZmM1ZWNmNjE2OGRiNzU5N2M5NmEzYTMwYzE0In0.Pi9y_IPff8vlsY8C64iGTA'
    const map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/dark-v9', //stylesheet location
      center: [18.46, -33.933], // starting position
      zoom: 13 // starting zoom
    });

    const marker = new mapboxgl.Marker(this.marker, {offset: [-15, -15]})
      .setLngLat([18.46, -33.933])
      .addTo(map);

    // setTimeout(() => {
    //   map.panTo([18.459727, -33.928], {duration: 2000})
      // marker.setLngLat([18.459727, -33.928])
    // }, 5000)
  },

  render() {
    return (
      <div id="map" className="map-box-container">
        <div ref={me => this.marker = me} id="marker" className="map-box-container marker"></div>
      </div>
    )
  }
});

export default Mapbox;