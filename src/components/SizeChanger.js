import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    return (
      <select onChange={(e)=>this.props.update(+e.target.value)} disabled={this.props.allowEdit==='false'?true:false} className="dropDownContainer">
        <option value="12"> 12 </option>
        <option value="14"> 14 </option>
        <option value="18"> 18 </option>
        <option value="24"> 24 </option>
      </select>
    );
  }
}
