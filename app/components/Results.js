import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../styles/index.js';
import UserDetails from './UserDetails.js';
import UserDetailsWrapper from './UserDetailsWrapper.js';
import MainContainer from './MainContainer.js';
import githubHelpers from '../assets/githubHelpers.js'
import Loading from './Loading.js';

const StartOver = () => {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to='/playerOne'>
        <button type='button'
          className="btn brn-lg btn-danger">
          Start Over
                </button>
      </Link>
    </div>
  );
};

const Tie = (props) => {
  return (
    <MainContainer>
      <h1>It is a tie!!!</h1>
      <StartOver />
    </MainContainer>
  )
}

const Results = (props) => {
  if (props.isLoading === true) {
    return <Loading text='One Moment' speed={100} />
  }

  if (props.scores[0] === props.scores[1]) {
    return <Tie scores={props.scores} playersInfo={props.playersInfo} />
  }

  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
  const losingIndex = winningIndex === 0 ? 1 : 0

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails scores={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails scores={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  );
};

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results;