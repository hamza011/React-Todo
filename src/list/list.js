import React from 'react';
import "./list.css"

export default class List extends React.Component {
  render() {
    return (
      <ul className="unordered-list">
        {
          this.props.items.map((item, index) =>
          <div key={index} className="each-item">
            <li className="list-item">todo # {index+1} : <b className="item">{item}</b> </li>
            <button onClick={this.props.deleteMethod.bind(null,index)} className="del-btn"> Delete</button>
          </div>
          )
        }
      </ul>
    )
  }
}