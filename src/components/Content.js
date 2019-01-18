import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Work from './Work';
import Blog from './Blog';

class Content extends Component {
  render(){
    return(
      <div className='content col-10'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/education' component={Education} />
          <Route path='/experience' component={Experience} />
          <Route path='/skills' component={Skills} />
          <Route path='/work' component={Work} />
          <Route path='/blog' component={Blog} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    )
  }
}
export default Content
