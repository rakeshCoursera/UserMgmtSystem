import React from 'react';
import axios from 'axios';
import moment from 'moment';
import UserTable from '../statelessComponents/userTable';

class ListUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: '',
      select: 'Name',
      filterValue: '',
    };
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  // Get the users array and save into users array
  componentWillMount() {
    const that = this;
    axios.get('/user') // get the products related data
      .then((response) => {
        that.setState({ users: response.data });
      })
      .catch((error) => {
        that.setState({ message: error });
      });
  }

  onSelectChange(event) {
    console.log('Select Event: ', event.target.value);
    this.setState({ select: event.target.value });
  }

  onHandleChange(event) {
    console.log('Filter Event: ', event.target.value);
    this.setState({ filterValue: event.target.value });
  }

  render() {
    if (this.state.users !== undefined) {
      if (this.state.users.length > 0) {
        console.log('users', this.state.users);
        const userData = this.state.users.map((myObj) => {
          const obj = {};
          Object.keys(myObj).forEach((element) => {
            if (element === 'first_name' || element === 'last_name') {
              if (obj.Name === undefined || obj.Name === '') {
                obj.Name = myObj.first_name;
              } else {
                obj.Name += ` ${myObj.last_name}`;
              }
            } else if (element === 'dob') {
              obj['Date Of Birth'] = moment(myObj[element]).format('DD MMM YYYY');
              obj.Age = moment().diff(myObj[element], 'years');
            } else {
              obj[element[0].toUpperCase() + element.substr(1).toLowerCase()] = myObj[element];
            }
          });
          return obj;
        });

        console.log('Modified Users Data: ', userData);

        return (
          <div >
            <div className="form-group">
              <div className="col-sm-6 col-xs-4 col-md-4 col-lg-4">
                <label htmlFor="company">Filter Using</label>
                <select
                  id="company"
                  className="form-control"
                  onChange={this.onSelectChange}
                  value={this.state.select}
                >
                  <option>Name</option>
                  <option>Email</option>
                  <option>Mobile</option>
                </select>
              </div>
              <div className="col-sm-6 col-xs-8 col-md-8 col-lg-8">
                <label htmlFor="filterBox">Filter Value:</label>
                <input
                  type="text"
                  className="form-control"
                  id="filterBox"
                  placeholder= {`Enter the ${this.state.select} to filter`}
                  name="filterBox"
                  value={this.state.filterValue !== null ? this.state.filterValue : ''}
                  onChange = {this.onHandleChange}
              />
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
              <br />
              <UserTable rows={userData} />
            </div>
          </div>
        );
      } else if (this.state.error !== '') {
        return (
          <div className = "text-center">
            <h3>An Error has occured</h3>
            <p>{this.state.error}</p>
          </div>
        );
      }
      return 'Loading...!!!';
    }
    return 'No users in the database!!!';
  }
}

export default ListUsers;
