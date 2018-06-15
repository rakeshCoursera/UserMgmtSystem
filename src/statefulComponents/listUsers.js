import React from 'react';
import axios from 'axios';
import FormatUserArray from '../lib/formatUserArray';
import Select from '../statelessComponents/select';
import InputField from '../statelessComponents/input';
import Model from './modal';
import UserTable from '../statelessComponents/userTable';

class ListUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersDetails: [],
      users: [],
      user: {},
      select: 'Name',
      filterValue: '',
    };
    this.onHandleSelectChange = this.onHandleSelectChange.bind(this);
    this.onHandleInputChange = this.onHandleInputChange.bind(this);
    this.onHandleNameClick = this.onHandleNameClick.bind(this);
    this.onHandleActionClick = this.onHandleActionClick.bind(this);
    this.onHandleUpdateClick = this.onHandleUpdateClick.bind(this);
    this.onHandleCheckboxClick = this.onHandleCheckboxClick.bind(this);
  }

  // Get the users array and save into users array
  componentDidMount() {
    const that = this;
    axios.get('/v1/user') // get the products related data
      .then((response) => {
        FormatUserArray(response.data).then((userArray) => {
          that.setState({ users: userArray, usersDetails: userArray });
        }).catch((err) => {
          console.log('Error: ', err);
        });
      }).catch((error) => {
        console.log('Error: ', error);
      });
  }

  onHandleSelectChange(event) {
    this.setState({ select: event.target.value });
  }

  onHandleInputChange(event) {
    this.setState({ filterValue: event.target.value }, () => {
      const userCopy = this.state.usersDetails.slice();
      const filteredArray = userCopy.filter(myObj =>
        (myObj[(this.state.select)].toLowerCase())
          .includes((this.state.filterValue).toLowerCase()));
      this.setState({ users: filteredArray });
    });
  }

  onHandleNameClick(key) {
    const userId = this.state.usersDetails.filter((myObj, index) => index === key)[0]._id;
    this.props.history.push(`/user/${userId}`);
  }

  onHandleActionClick(key) {
    const userObj = this.state.users.filter((myObj, index) => index === key)[0];
    this.setState({ user: userObj });
  }

  onHandleCheckboxClick(key) {
    const usersCopy = this.state.users.slice();
    const userObj = usersCopy.filter((myObj, index) => index === key)[0];
    userObj.Active = !userObj.Active;
    usersCopy[key] = userObj;
    this.setState({ users: usersCopy, usersDetails: usersCopy });
  }

  onHandleUpdateClick(obj, id) {
    obj.active = this.state.users.filter(newObj => newObj._id === id)[0].Active;
    const that = this;
    axios.put(`/v1/user/${id}`, obj)
      .then((response) => {
        const userCopy = this.state.users.slice();
        const indexNum = this.state.users.findIndex(myObj => myObj._id === id);
        FormatUserArray([response.data]).then((retArr) => {
          userCopy[indexNum] = retArr[0];
          that.setState({ users: userCopy, usersDetails: userCopy });
        }).catch((err) => {
          console.log('Error: ', err);
        });
      }).catch((err) => {
        console.log('Error: ', err);
      });
  }

  render() {
    const FixedHtml = (
      <div className="form-group">
          <div className="col-sm-6 col-xs-4 col-md-4 col-lg-4">
            <Select
              text = 'Filter Using'
              onSelectChange = {this.onHandleSelectChange}
              currentValue = {this.state.select}
              options = {['Name', 'Email']}
            />
          </div>
          <div className="col-sm-6 col-xs-8 col-md-8 col-lg-8">
            <InputField
              text = 'Filter Value'
              placeholder = {`Enter the ${this.state.select} to filter`}
              type='text'
              currentValue={this.state.filterValue !== null ? this.state.filterValue : ''}
              onHandleChange = {this.onHandleInputChange}
            />
          </div>
        </div>
    );

    if (this.state.users === undefined || this.state.users.length === 0) {
      return (
        <div>
          {FixedHtml}
          <div className="text-center">
            <br />
            <p>Loading data from database...!!!</p>
          </div>
        </div>
      );
    }

    return (
      <div >
        {FixedHtml}
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
          <br />
          <UserTable
            rows={this.state.users}
            onHandleClick = {this.onHandleNameClick}
            onActionsClick = {this.onHandleActionClick}
            onCheckboxChange = {this.onHandleCheckboxClick}
          />
          {Object.keys(this.state.user).length > 0 ?
            <Model
              user={this.state.user}
              onUpdateClick = {this.onHandleUpdateClick}
            /> : <div></div>}
        </div>
      </div>
    );
  }
}

export default ListUsers;
