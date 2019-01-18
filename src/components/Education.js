import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const educationList = require('../data/education.json')

class Education extends Component {
  getCourseList(list) {
    return list.map((item) => {
      return(
        <li>{item}</li>
      )
    })
  }
  getEducations() {
    let count = 0;
    return educationList.map((item) => {
      count++;
      return (
        <div className="card">
          <div className="card-header" id={`heading${count}`}>
            <h2 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${count}`} aria-expanded="false" aria-controls={`collapse${count}`}>
                {item.degree} DEGREE {item.majors}
                <FontAwesomeIcon icon={faPlus} style={{fontSize: "20px", position:"absolute", right: "20px"}} />
              </button>
            </h2>
          </div>
          <div id={`collapse${count}`} className="collapse" aria-labelledby={`heading${count}`} data-parent="#education-container">
            <div className="card-body">
              <h5>{item.college}</h5>
              <h6>{item.time}</h6>
              <h6>MAJOR COURSE:</h6>
              <ul>
                {this.getCourseList(item.majorCourse)}
              </ul>
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className='education'>
        <h1>EDUCATION EXPERIENCE</h1>
        <div className='education-container' id='education-container'>
          {this.getEducations()}
        </div>
      </div>
    )
  }
}

export default Education
