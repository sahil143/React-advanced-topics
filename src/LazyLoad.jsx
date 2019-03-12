import React, {Suspense} from 'react';
import { delayPromise } from './utils';

const SomeComponent = React.lazy(() => import('./SomeComponent').then(delayPromise(3000)));


export default class LazyLoad extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading.... </div>}>
        <SomeComponent />
        </Suspense>
      </div>
    )
  }
}
