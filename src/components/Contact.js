import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Actions from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faMapMarkedAlt, faMobileAlt } from "@fortawesome/free-solid-svg-icons"

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate(prevProps) {
    if (this.props.email !== prevProps.email) {
      if (this.props.email[0].status === 400) {
        alert('send email failed');
      } else if (this.props.email[0].status === 200) {
        alert('send email succed');
      }
    }
  }
  submit(e) {
    e.preventDefault();
    this.props.sendEmail(this.state);
  }
  _onChange(e) {
    e.preventDefault();
    let value = {};
    value[e.target.id.replace('input','')] = e.target.value;
    this.setState(value);
  }
  render() {
    return(
      <div className='contact'>
        <h1>CONTACT</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-item">
              <div className="contact-icon-container">
                <FontAwesomeIcon icon={faAt} style={{fontSize: "28px", color:"#2c98f0", marginTop: "30px"}} />
              </div>
              <div className="contact-text">
                <a href="mailto:majingze0508@gmail.com">majingze0508@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-container">
                <FontAwesomeIcon icon={faMapMarkedAlt} style={{fontSize: "28px", color:"#2c98f0", marginTop: "30px"}} />
              </div>
              <div className="contact-text">
                <span>10559 Bayview Ave, Richmond Hill, ON, Canada L4C 0M8</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-container">
                <FontAwesomeIcon icon={faMobileAlt} style={{fontSize: "28px", color:"#2c98f0", marginTop: "30px"}} />
              </div>
              <div className="contact-text">
                <span>(514)651-7533</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box fadeInRight animated">
                <form onSubmit={(e) => this.submit(e)}>
                  <div className="form-group">
                    <input type="text" className="form-control" id="inputName" placeholder="Name" onChange={(e) => this._onChange(e)} />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={(e) => this._onChange(e)} />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="inputSubject" placeholder="Subject" onChange={(e) => this._onChange(e)} />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="inputMessage" cols="30" rows="7" onChange={(e) => this._onChange(e)}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendEmail: Actions.sendEmail }, dispatch);
}

function mapStateToProps (state) {
  return { email: state.email };
}

const Contact = connect(mapStateToProps, mapDispatchToProps)(ContactInfo);
export default Contact

