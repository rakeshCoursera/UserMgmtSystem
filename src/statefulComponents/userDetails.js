import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  componentWillMount() {
    const that = this;
    axios.get(`/v1/user/${this.props.match.params.userId}`) // get the products related data
      .then((response) => {
        that.setState({ user: response.data });
      }).catch((error) => {
        console.log('Error: ', error);
      });
  }

  onHandleClick() {
    this.props.history.push('/');
  }

  render() {
    if (this.state.user === undefined || Object.keys(this.state.user).length === 0) {
      return (
        <div>
          <br />
          <p>Loading data for the user with id {this.props.match.params.userId}</p>
        </div>
      );
    }

    const fields = Object.keys(this.state.user).map((key, index) =>
      <h4 key={index.toString()}>
        <b>{key}</b>: <i>{(this.state.user[key]).toString()}</i>
      </h4>);
    return (
      <div>
        <div>
        <button type="button" className="btn btn-info" onClick={this.onHandleClick}>
          <b>Back to List</b>
        </button>
        </div>
        <div>
          <br />
          {fields}
        </div>
      </div>
    );
  }
}

module.exports = Form;
