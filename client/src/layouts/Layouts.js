import React from 'react'
import './Layouts.css'

import Overflow from './overflow/Overflow'
import TwoColumn from './twocolumn/TwoColumn'
import Affix from './affixed/Affix'
import ButtonBar from './buttonbar/ButtonBar'
import ThreeColumnMenu from './threeColumnMenu/ThreeColumnMenu'

const Layouts = React.createClass({
  render() {
    return (
        <div>
          {/*<Overflow/>*/}
          {/*<TwoColumn/>*/}
          <Affix/>
          {/*<ButtonBar/>*/}
          {/*<ThreeColumnMenu/>*/}
        </div>
    )
  }
});

export default Layouts;