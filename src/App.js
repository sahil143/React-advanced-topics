import React, { Component } from 'react';
import './App.css';
import LoadOnClick from './LoadOnClick';
import LazyLoad from './LazyLoad';
import RouteBasedLazyLoading from './RouteBasedLazyLoading';
import { Counter, ErrorBounndry } from './ErrorBoundry';
class App extends Component {
  render() {
    return (
      <div className="App">
      <ErrorBounndry>
        <Counter />
        </ErrorBounndry>
      </div>
    );
  }
}

export default App;
