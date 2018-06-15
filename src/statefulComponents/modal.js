/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import moment from 'moment';
import InputField from '../statelessComponents/input';

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: props.user.Name.split(' ')[0],
      lname: props.user.Name.split(' ')[props.user.Name.split(' ').length - 1],
      email: props.user.Email,
      mobile: props.user.Mobile,
      dob: moment(props.user['Date Of Birth'], 'DD MMM YYYY').format('YYYY-MM-DD'),
      fnameValid: true,
      lnameValid: true,
      emailValid: true,
      mobileValid: true,
      dobValid: true,
      modelExit: false,
    };
    this.onHandleFnameChange = this.onHandleFnameChange.bind(this);
    this.onHandleLnameChange = this.onHandleLnameChange.bind(this);
    this.onHandleEmailChange = this.onHandleEmailChange.bind(this);
    this.onHandleMobileChange = this.onHandleMobileChange.bind(this);
    this.onHandleDOBChange = this.onHandleDOBChange.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
  }

  onHandleFnameChange(event) {
    this.setState({ fname: event.target.value });
    if ((event.target.value).length > 0) {
      this.setState({ fnameValid: true });
    } else {
      this.setState({ fnameValid: false });
    }
  }

  onHandleLnameChange(event) {
    this.setState({ lname: event.target.value });
    if ((event.target.value).length > 0) {
      this.setState({ lnameValid: true });
    } else {
      this.setState({ lnameValid: false });
    }
  }

  onHandleMobileChange(event) {
    this.setState({ mobile: event.target.value });
    if ((event.target.value).length === 10) {
      this.setState({ mobileValid: true });
    } else {
      this.setState({ mobileValid: false });
    }
  }

  onHandleEmailChange(event) {
    this.setState({ email: event.target.value });
    if ((event.target.value).length === 10) {
      this.setState({ mobileValid: true });
    } else {
      this.setState({ mobileValid: false });
    }
  }

  onHandleDOBChange(event) {
    this.setState({ dob: event.target.value });
    if ((event.target.value).length === 10) {
      this.setState({ dobValid: true });
    } else {
      this.setState({ dobValid: false });
    }
  }

  onCloseClick() {
    this.setState({
      modelExit: true,
    });
  }

  onUpdateClick() {
    const myObj = {
      first_name: this.state.fname,
      last_name: this.state.lname,
      email: this.state.email,
      mobile: this.state.mobile,
      dob: this.state.dob,
    };
    this.props.onUpdateClick(myObj, this.props.user._id);
    this.setState({
      modelExit: true,
    });
  }

  render() {
    return (
      <form className="modal fade" id="myModal" data-backdrop="static" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss={this.state.modelExit ? 'modal' : '' }
                onClick={this.onCloseClick}>&times;</button>
              <h4 className="modal-title">View, Edit, Active/Deactivate User </h4>
            </div>
            <div className="modal-body">
              <InputField
                text = 'First Name'
                placeholder = 'Enter the first name'
                type='text'
                currentValue={this.state.fname ? this.state.fname : '' }
                onHandleChange = {this.onHandleFnameChange}
              />
              <InputField
                text = 'Last Name'
                placeholder = 'Enter the last name'
                type='text'
                currentValue={this.state.lname ? this.state.lname : ''}
                onHandleChange = {this.onHandleLnameChange}
              />
              <InputField
                text = 'Email'
                placeholder = 'Enter the Email'
                type='email'
                currentValue={this.state.email ? this.state.email : ''}
                onHandleChange = {this.onHandleEmailChange}
              />
              <InputField
                text = 'Mobile'
                placeholder = 'Enter the Mobile Number'
                type='number'
                currentValue={this.state.mobile ? this.state.mobile : ''}
                onHandleChange = {this.onHandleMobileChange}
              />
              <InputField
                text = 'Date of Birth'
                placeholder = 'Enter the user Date of Birth'
                type='date'
                currentValue={this.state.dob ? this.state.dob : ''}
                onHandleChange = {this.onHandleDOBChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss={this.state.modelExit ? 'modal' : '' }
                onClick = {this.onUpdateClick}
              >Update</button>
              <button
              type="button"
              className="btn btn-default"
              data-dismiss={this.state.modelExit ? 'modal' : '' }
              onClick={this.onCloseClick}>
                Close
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Model;
