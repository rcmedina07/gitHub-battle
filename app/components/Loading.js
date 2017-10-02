import React, { Component, PropTypes } from 'react';
import styles from '../styles/index.js';

class Loading extends Component {
  originalText = this.props.text
  state = {
    text: this.originalText
  }
  componentDidMount() {
    const stopper = this.originalText + '...'
    this.interval = setInterval(() => {
      (this.state.text === stopper)
        ? this.setState({ text: this.originalText })
        : this.setState({ text: this.state.text + '.' })
    }, this.props.speed)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div style={styles.container}>
        <p style={styles.content}> {this.state.text} </p>
      </div>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

export default Loading;