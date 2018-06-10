import React from 'react';
import axios from 'axios';
import UserTable from './components/userTable';

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
      return (
        <div >
          <UserTable rows={this.state.users} />
        </div>
      );
    } else if (this.state.error !== '') {
      return (
        <div >
          <h3>An Error has occured</h3>
          <p>{this.state.error}</p>
        </div>
      );
    }
    return 'Loading...!!!';
  }
}

export default ListUsers;
