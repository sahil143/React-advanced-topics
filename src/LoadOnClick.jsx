import React, { Component } from 'react';
// import { foo } from './foo';

class LoadOnClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    import('./foo').then(comp => {
      this.setState({result: comp.foo('React')});
    })
  }

  render() {
    return (
      <div className="LoadOnClick">
        <button onClick={this.handleClick} >button</button>
        <p> Result is: {this.state.result}</p>
      </div>
    );
  }
}

export default LoadOnClick;