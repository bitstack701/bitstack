import React from 'react'
import classnames from 'classnames'

import './ThreeColumnMenu.css'

const ThreeColumnMenu = React.createClass({

  getInitialState() {
    return {
      column1Collapse: false,
      column2Collapse: false,
      column3Collapse: false,
      selectedGroup: undefined,
      selectedValue: undefined,
      groups: [
        {id: 1, name: 'Fruit', values: [
          {id: 101, name: "Apples"},
          {id: 102, name: "Grapes"},
          {id: 103, name: "Peaches"}
          ]
        },
        {id: 2, name: 'Vegetables', values: [
          {id: 201, name: "Carrot"},
          {id: 202, name: "Cabbage"},
          {id: 203, name: "Butternut"},
          {id: 204, name: "Beetroot"},
          ]
        }
      ]
    }
  },

  componentWillMount() {
    this.setState({selectedGroup: this.state.groups[0]})
  },

  toggle1() { this.setState({column1Collapse: !this.state.column1Collapse}) },
  toggle2() { this.setState({column2Collapse: !this.state.column2Collapse}) },
  toggle3() { this.setState({column3Collapse: !this.state.column3Collapse}) },

  groupSelected(e, groupId) {
    e.stopPropagation()
    const { groups } = this.state
    this.setState({
      selectedGroup: groups.find(g => g.id === groupId),
      selectedValue: undefined,
      column1Collapse: false,
      column2Collapse: false
    })
  },

  valueSelected(e, valueId) {
    e.stopPropagation()
    const { selectedGroup } = this.state
    this.setState({
      column1Collapse: true,
      column2Collapse: true,
      selectedValue: selectedGroup.values.find(v => v.id === valueId)
    })
  },

  render() {
    const { column1Collapse, column2Collapse, column3Collapse, groups, selectedGroup, selectedValue } = this.state
    return (
        <div className="three-column-container">
          <div className={classnames("three-column-container column box1", {narrow: column1Collapse})} >
            <div className="three-column-container row">
              {groups.map(g => {
                return <div className="three-column-container item" onClick={e => this.groupSelected(e, g.id)}>{g.name}</div>
              })}
            </div>
          </div>
          <div className={classnames("three-column-container column box2", {narrow: column2Collapse})} >
            <div className="three-column-container row">
              {selectedGroup.values.map(v => {
                return <div className="three-column-container item" onClick={e => this.valueSelected(e, v.id)}>{v.name}</div>
              })}
            </div>
          </div>
          <div className={classnames("three-column-container column box3", {narrow: column3Collapse})} >
            <div className="three-column-container row">
              { selectedValue ? selectedValue.name : "Please select an item"}
            </div>
          </div>
        </div>
    )
  }
});

export default ThreeColumnMenu;