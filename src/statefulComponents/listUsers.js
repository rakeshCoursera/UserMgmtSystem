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
    };
  }

  // Get the users array and save into users array
  componentWillMount() {
    const that = this;
    axios.get('https://api.myjson.com/bins/czfgy') // get the products related data
      .then((response) => {
        that.setState({ users: response.data.users });
      })
      .catch((error) => {
        that.setState({ message: error });
      });
  }

  render() {
    if (this.state.users.length > 0) {
      const usersData = this.state.users.map((myObj) => {
        const obj = {};
        Object.keys(myObj).forEach((element, index) => {
          if (element === 'first_name' || element === 'last_name') {
            if (obj.Name === undefined || obj.Name === '') {
              obj.Name = myObj.first_name;
            } else {
              obj.Name += myObj.last_name;
            }
          } else if (element === 'dob') {
            obj['Date Of Birth'] = moment(element, 'DDMMYYYY').format('DD MMM YYYY');
            obj.Age = moment(element, 'DDMMYYYY').fromNow();
          } else {
            obj[element[0].toUpperCase() + element.substr(1).toLowerCase()] = myObj.element;
          }

          if (Object.keys(obj).length === index + 1) {
            return obj;
          }
        });
      });

      console.log(usersData);
      
      return (
        <div >
          <UserTable rows={usersData} />
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
}

export default ListUsers;
