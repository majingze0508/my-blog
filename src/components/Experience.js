import React, { Component } from 'react';

import Card from './Card';

const ExperienceList = require('../data/experience.json');

class Experience extends Component {
  render() {
    return(
      <div className='experience'>
        <h1>WORK EXPERIENCE</h1>
        <Card
          list={ExperienceList}
        />
      </div>
    )
  }
  
}
export default Experience