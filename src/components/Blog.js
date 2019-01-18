import React, { Component } from 'react'

class Blog extends Component {
  render() {
    return(
      <div className="blog">
        <h1>CURRENT BLOG</h1>
        <div className="row">
          <div className="col-md-4 col-sm-6 animate-box fadeInLeft animated">
            <div className="blog-entry">
              <img src="../src/images/blog-1.jpg" className="img-thumbnail" alt="Renovating National Gallery" />
              <div className="desc">
                <span><small>April 14, 2018 </small>|<small> WEB DESIGN </small></span>
                <h5>Renovating National Gallery</h5>
                <article>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</article>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 animate-box fadeInLeft animated">
            <div className="blog-entry">
              <img src="../src/images/blog-2.jpg" className="img-thumbnail" alt="Wordpress for a Beginner" />
              <div className="desc">
                <span><small>April 14, 2018 </small>|<small> WEB DESIGN </small></span>
                <h5>Wordpress for a Beginner</h5>
                <article>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</article>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 animate-box fadeInLeft animated">
            <div className="blog-entry">
              <img src="../src/images/blog-3.jpg" className="img-thumbnail" alt="Make website from scratch" />
              <div className="desc">
                <span><small>April 14, 2018 </small>|<small> WEB DESIGN </small></span>
                <h5>Make website from scratch</h5>
                <article>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</article>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Blog
