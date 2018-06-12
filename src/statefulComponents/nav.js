import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="true" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React Router</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            {this.props.children}
          </div>
        </div>
      </nav>
    );
  }
}
