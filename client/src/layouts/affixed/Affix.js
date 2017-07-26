import React from 'react'
import Rx from 'rxjs/Rx'

import './Affix.css'

const Affix = React.createClass({

  componentDidMount() {

    const addStyles = (dto) => {
      const { stickyElement, contentElement, stickyOffset } = dto
      stickyElement.style.position = 'fixed'
      stickyElement.style.top = stickyOffset+'px'
      contentElement.style.paddingTop = stickyElement.clientHeight+'px'
      return dto
    }

    const removeStyles = (dto) => {
      const { stickyElement, contentElement } = dto
      stickyElement.style.position = null
      stickyElement.style.top = null
      contentElement.style.paddingTop = null
      return dto
    }

    Rx.Observable.fromEvent(window, 'scroll')
    .flatMap(() => {
      const stickyRows = []
      this.container.querySelectorAll('.affix-window-row').forEach((row, i) => {
        const stickyElement = row.querySelector('.affix-row-title')
        const contentElement = row.querySelector('.affix-row-content')

        const ans = {
          idx: i,
          row: row,
          stickyElement: stickyElement,
          contentElement: contentElement,
          rowOffset: row.offsetTop,
          stickyOffset: i*stickyElement.clientHeight,
          windowScrollY: window.scrollY,
        }

        ans.action = window.scrollY >= ans.rowOffset-ans.stickyOffset ? 'add' : 'remove'

        stickyRows.push(ans)
      })
      return Rx.Observable.from(stickyRows)
    }).subscribe((dto) => {
      console.log(dto)
      dto.action === 'add' ? addStyles(dto) : removeStyles(dto)
    })
  },

  render() {
    return (
        <div ref={me => this.container = me} className="affix-container">
          <div className="affix-box">Taking up space</div>
          <div className="affix-window">
            <div className="affix-window-row">
              <div className="affix-row-title">row title 1</div>
              <div className="affix-row-content">Also taking up space</div>
            </div>
            <div className="affix-window-row">
              <div className="affix-row-title">row title 2</div>
              <div className="affix-row-content">Also taking up space</div>
            </div>
          </div>
        </div>
    )
  }
});

export default Affix;