import React, { Component } from 'react'

class Work extends Component {

  render() {
    return(
      <div className='work'>
        <h1>My Current Works</h1>
        <div id="carousel-work-indicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-work-indicators" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-work-indicators" data-slide-to="1"></li>
            <li data-target="#carousel-work-indicators" data-slide-to="2"></li>
            <li data-target="#carousel-work-indicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="../src/images/mongo.jpeg" className="d-block w-100" alt="mongoDB" />
            </div>
            <div className="carousel-item">
              <img src="../src/images/node.jpg" className="d-block w-100" alt="node.js" />
            </div>
            <div className="carousel-item">
              <img src="../src/images/es6.jpeg" className="d-block w-100" alt="es6" />
            </div>
            <div className="carousel-item">
              <img src="../src/images/react.png" className="d-block w-100" alt="React.js" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carousel-work-indicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel-work-indicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Work
