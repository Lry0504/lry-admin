import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class RouterMap extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/" component={Home} >
            <Route path="/info_confirm" component={InfoConfirm} />
            <Route path="/setting" component={Setting} />
            <Route path="/tracking" component={tracking} />
          </Route>
        </Router>
      </React.Fragment>
    )
  }
}



