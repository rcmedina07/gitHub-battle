import React, { Component } from 'react';
import { Link } from 'react-router';
import MainContainer from './MainContainer.js';

class Home extends Component  {
  render() {
    return (
      <MainContainer>
        <h1>GitHub Battle</h1>
        <p className="lead">Start</p>
        <Link to="/playerOne">
          <button className="btn btn-lg btn-success">
            Get Started
          </button>
        </Link>
      </MainContainer>
    );
  }
}

export default Home;