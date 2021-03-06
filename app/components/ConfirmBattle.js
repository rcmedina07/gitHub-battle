import React, { Component, PropTypes } from 'react';
import styles from '../styles/index.js';
import { Link } from 'react-router';
import UserDetails from './UserDetails.js';
import UserDetailsWrapper from './UserDetailsWrapper.js';
import MainContainer from './MainContainer.js';
import githubHelpers from '../assets/githubHelpers.js'
import Loading from './Loading.js';

const ConfirmBattle = (props) => {
  return (props.isLoading === true ? <Loading text='One Moment' speed={100} />
    : <MainContainer>
      <h1>Confirm Players</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Player One'>
          <UserDetails info={props.playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Player Two'>
          <UserDetails info={props.playersInfo[1]} />
        </UserDetailsWrapper>
      </div>
      <div className='col-sm-8 col-sm-offset-2'>
        <div className='col-sm-12' style={styles.space}>
          <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
        </div>
        <div className='col-sm-12' style={styles.space}>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
          </Link>
        </div>
      </div>
    </MainContainer>
  )
};

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
};

export default ConfirmBattle;