import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Reading from './reading';
import Quize from './quize';
import Result from './quize_result';

const routing=(
 
  <Router>
    <div>
    <Route path="/" component={App}  exact= {true}/>
    {/* <Route path="/reading" component={Reading} />
    <Route path="/quize" component={Quize} />
    <Route path="/quize_result" component={Result} /> */}
    </div>
  </Router>
);
ReactDOM.render(
  routing,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
