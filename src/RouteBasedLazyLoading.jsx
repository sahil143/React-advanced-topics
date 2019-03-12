import React from 'react';
// import LazyLoad from './LazyLoad';
// import LoadOnClick from './LoadOnClick';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { delayPromise } from './utils';

const LazyLoad = React.lazy(() => import('./LazyLoad').then(delayPromise(3000)));
const LoadOnClick = React.lazy(() => import('./LoadOnClick'));


class RouteBasedLazyLoading extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/lazyloaded">Lazy Loading</Link>
            </li>
            <li>
              <Link to="/dynamicimports">Dynamic imports</Link>
            </li>
          </ol>

          <hr />
          <React.Suspense fallback={<i>Loading you page ...</i>}>
          <Route exact path="/" component={Home} />
          <Route path="/lazyloaded" component={LazyLoad} />
          <Route path="/dynamicimports" component={LoadOnClick} />
          </React.Suspense>
          </div>
        </Router>
      </div>
    );
  }
}

export default RouteBasedLazyLoading;

function Home() {
  return <div>This is Home Page</div>
}