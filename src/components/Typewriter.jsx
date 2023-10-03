import React, { Component } from 'react';

class TypeWriter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '',
      wordIndex: 0,
      isDeleting: false,
    };
    this.timeoutId = null; // Store the timeout ID
  }

  componentDidMount() {
    this.type();
  }

  componentWillUnmount() {
    // Clear the timeout when the component unmounts
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  type = () => {
    const { words, wait } = this.props;
    const { wordIndex } = this.state;
    const current = wordIndex % words.length;
    const fullTxt = words[current];

    if (this.state.isDeleting) {
      this.setState({ txt: fullTxt.substring(0, this.state.txt.length - 1) }, () => {
        this.triggerType();
      });
    } else {
      this.setState({ txt: fullTxt.substring(0, this.state.txt.length + 1) }, () => {
        this.triggerType();
      });
    }

    let typeSpeed = 300;

    if (this.state.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.state.isDeleting && this.state.txt === fullTxt) {
      typeSpeed = wait;
      this.setState({ isDeleting: true }, () => {
        this.triggerType();
      });
    } else if (this.state.isDeleting && this.state.txt === '') {
      this.setState((prevState) => ({
        isDeleting: false,
        wordIndex: prevState.wordIndex + 1,
      }), () => {
        this.triggerType();
      });
      typeSpeed = 500;
    }

    // Store the timeout ID
    this.timeoutId = setTimeout(() => this.type(), typeSpeed);
  };

  triggerType = () => {
    // Clear the previous timeout
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    // Set a new timeout for the next animation step
    this.timeoutId = setTimeout(() => this.type(), 300); // You can adjust the delay here
  };

  render() {
    return (
      <h1>
        I Am John The{' '}
        <span className="txt">{this.state.txt}</span>
      </h1>
    );
  }
}

export default TypeWriter;
