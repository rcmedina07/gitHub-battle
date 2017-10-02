import React, { Component, ContextTypes } from 'react';
import Prompt from '../components/Prompt.js';

class PromptContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: ''

    }
  }
  render() {
    return (
      <Prompt onSubmitUser={this._handleSubmitUser}
        onUpdateUser={this._handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    );
  }
  _handleUpdateUser = (e) => {
    e.preventDefault();
    this.setState({
      username: e.target.value
    });
  }
  _handleSubmitUser = (e) => {
    e.preventDefault();
    let user = this.state.username;
    this.setState({
      username: ''
    });
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      this.context.router.push({
        pathname: '/playerTwo/'+ this.state.username
       });
    }
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default PromptContainer;