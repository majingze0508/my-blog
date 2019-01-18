import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return(
      <div className="sidebar col-2">
        <aside className="side-content">
          <div className="text-center">
            <div className="family-img">
            </div>
            <h1 className="sidebar-logo">
              Jingze Ma
            </h1>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="collapse navbar-collapse" id="navbar">
                <ul>
                  <li>
                    <Link to={'/'} className='nav-link'>HOME</Link>
                  </li>
                  <li>
                    <Link to={'/about'} className='nav-link'>ABOUT</Link>
                  </li>
                  <li>
                    <Link to={'/skills'} className='nav-link'>SKILLS</Link>
                  </li>
                  <li>
                    <Link to={'/education'} className='nav-link'>EDUCATION</Link>
                  </li>
                  <li>
                    <Link to={'/experience'} className='nav-link'>EXPERIENCE</Link>
                  </li>
                  <li>
                    <Link to={'/work'} className='nav-link'>WORK</Link>
                  </li>
                  <li>
                    <Link to={'/blog'} className='nav-link'>BLOG</Link>
                  </li>
                  <li>
                    <Link to={'/contact'} className='nav-link'>CONTACT</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </aside>
      </div>
    )
  }
}

export default Sidebar;
