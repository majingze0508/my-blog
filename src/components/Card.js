import React, { Component } from 'react';

class Card extends Component {

  getResposibilities(list) {
    return list.map((item) => {
      return <li>{item}</li>
    })
  }

  getContent() {
    return this.props.list.map((item) => {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.position} / {item.company}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.time}</h6>
            <ul className="card-text">
              {this.getResposibilities(item.responsibilities)}
            </ul>
          </div>
        </div>
      )
    })
  }
  render() {
    return(
      <div className="card-container">
        {this.getContent()}
      </div>
    )
  }
}

export default Card
