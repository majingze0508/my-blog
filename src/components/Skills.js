import React, { Component } from 'react';

const SkillList = require('../data/skills.json');

class Skills extends Component {

  getSkills() {
    return SkillList.map((item) => {
      const valueNow = item.rate.replace('%', '');
      return (
        <div className="progress-wrap">
          <h5>{item.name}</h5>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: item.rate, backgroundColor: item.color }} aria-valuenow={valueNow} aria-valuemin="0" aria-valuemax="100">{item.rate}</div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className='skills'>
        <h1>My Skills</h1>
        {this.getSkills()}
      </div>
    )
  }
}

export default Skills
