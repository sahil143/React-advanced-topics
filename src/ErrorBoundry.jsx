import React from 'react';

export class ErrorBounndry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error, infor) {
    console.error(error);
  }

  render() {
    if(this.state.hasError) {
      return <h1> Oops!! Something Went Wrong </h1>
    }
    return this.props.children;
  }
}

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    let counter = this.state.counter;
    this.setState({counter: counter+1})
  }

  render() {
    if(this.state.counter > 3) {
      throw "It crahed";
    }
    return (
      <div>
        <button onClick={this.handleChange}>Increment</button>
        <p>{this.state.counter}</p>
      </div>
    )
  }
}