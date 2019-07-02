import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App'
import Admin from '../admin'
import Home from '../pages/Home'
import Buttons from '../pages/UI/button'
import Modals from '../pages/UI/modal'
import Loadings from '../pages/UI/loading'
export default class RouterMap extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/" render={() =>
              <Admin>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/ui/buttons" component={Buttons} />
                  <Route path="/ui/modals" component={Modals} />
                  <Route path="/ui/loadings" component={Loadings} />
                  <Redirect to="/home" />
                </Switch>
              </Admin>
            } />
          </Switch>
        </App>
      </BrowserRouter>
    )
  }
}



