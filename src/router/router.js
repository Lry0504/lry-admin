import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App'
import Admin from '../admin'
import Home from '../pages/Home'
import Buttons from '../pages/UI/button'
import Modals from '../pages/UI/modal'
import Loadings from '../pages/UI/loading'
import Notifications from '../pages/UI/notice'
import Messages from '../pages/UI/message'
import Tabs from '../pages/UI/tab'
import ProgressBar from '../pages/UI/progress'
import StepBar from '../pages/UI/step'
import Carousels from '../pages/UI/carousel'
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
                  <Route path="/ui/notification" component={Notifications} />
                  <Route path="/ui/messages" component={Messages} />
                  <Route path="/ui/tabs" component={Tabs} />
                  <Route path="/ui/progress" component={ProgressBar} />
                  <Route path="/ui/steps" component={StepBar} />
                  <Route path="/ui/carousel" component={Carousels} />
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



