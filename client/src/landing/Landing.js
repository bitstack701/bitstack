import React from 'react'
import { Link } from 'react-router'

import './Landing.css';

const Landing = React.createClass({

  render() {
    return (
      <div className="landing-container">
        <div className="landing-sections">
          <div className="landing-header">
            <div className="landing-logo"/>

            <div className="landing-name-and-caption">
              <div>bitstack</div>
              <div className="caption">"it's a code thing"</div>
            </div>
          </div>
          <div className="landing-section">
            <div className="landing-background" >
              {/*<img src="/stock2.jpg"/>*/}
              {/*<video src="./landing/Love-Coding.mp4" autoPlay loop/>*/}
            </div>
          </div>
          <div className="landing-section">
            Page 2
          </div>
        </div>
      </div>
    )
  }
});

const Welcome = React.createClass({
  render() {
    return (
      <div className="section">
        <div className="welcome-container">
          <div className="welcome-item">
            <Link to={`/about`}>It's a Code Thing</Link>
          </div>
        </div>
        <div className="landing-background" >
          <img src="/stock2.jpg"/>
          {/*<video src="./landing/Love-Coding.mp4" autoPlay loop/>*/}
        </div>
      </div>
    )
  }
});


const Header = React.createClass({
  render() {
    return (
      <div className="landing-header">
        <div className="logo">Logo</div>
      </div>
    )
  }
});

const Page1 = React.createClass({
  render() {
    return (
      <div className="section">
        <div className="landing-wrapper">
          <div className="landing-header">
            <div className="logo">Logo</div>

            <div className="menu">Hello 2</div>
            <div className="menu">Hello 3</div>
            <div className="menu">Hello 4</div>
            <div className="menu">Hello 5</div>
            <div className="menu">Hello 5</div>
            <div className="menu">Hello 5</div>
          </div>
          <div className="landing-content">
            <div>Welcome</div>
            <div>Welcome</div>
            <div>Welcome</div>
          </div>
        </div>
      </div>
    )
  }
});

export default Landing;