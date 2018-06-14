import React from 'react';
import axios from 'axios';
import formatUserArray from '../lib/formatUserArray';
import Select from '../statelessComponents/select';
import InputField from '../statelessComponents/input';
import UserTable from '../statelessComponents/userTable';

class ListUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: [],
      users: [],
      select: 'Email',
      filterValue: '',
    };
    this.onHandleSelectChange = this.onHandleSelectChange.bind(this);
    this.onHandleInputChange = this.onHandleInputChange.bind(this);
  }

  // Get the users array and save into users array
  componentDidMount() {
    const that = this;
    axios.get('/user') // get the products related data
      .then((response) => {
        that.setState({ users: response.data, userDetails: response.data });
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

  onHandleSelectChange(event) {
    this.setState({ select: event.target.value });
  }

  onHandleInputChange(event) {
    this.setState({ filterValue: event.target.value }, () => {
      const userCopy = this.state.userDetails.slice();
      if (this.state.select === 'Email') {
        const filteredArray = userCopy.filter(myObj => myObj[(this.state.select).toLocaleLowerCase()].includes(this.state.filterValue));
        console.log('Filtered Array: ', filteredArray);
        this.setState({ users: filteredArray });
      }
    });
  }

  render() {
    const FixedHtml = (
      <div className="form-group">
          <div className="col-sm-6 col-xs-4 col-md-4 col-lg-4">
            <Select
              onSelectChange = {this.onHandleSelectChange}
              currentValue = {this.state.select}
              options = {['Email', 'Name']}
            />
          </div>
          <div className="col-sm-6 col-xs-8 col-md-8 col-lg-8">
            <InputField
              placeholder = {`Enter the ${this.state.select} to filter`}
              currentValue={this.state.filterValue !== null ? this.state.filterValue : ''}
              onHandleChange = {this.onHandleInputChange}
            />
          </div>
        </div>
    );

    if (this.state.users !== undefined && this.state.users.length === 0) {
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
    const userData = formatUserArray(this.state.users);

    console.log('Modified Users Data: ', userData);

    return (
      <div >
        {FixedHtml}
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
          <br />
          <UserTable rows={userData} />
        </div>
      </div>
    );
  }
}

export default ListUsers;
