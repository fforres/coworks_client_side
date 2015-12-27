import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Notifications, NavBar } from 'components';

export default class Root extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    routes: React.PropTypes.element.isRequired,
    store: React.PropTypes.object.isRequired
  }

  render () {
    const content = (
      <div>
        <Router history={this.props.history}>
          {this.props.routes}
        </Router>
        <Notifications store={this.props.store} />
      </div>
    );

    if (__DEBUG__ && !__DEBUG_NW__) {
      const DevTools = require('containers/DevTools').default;

      return (
        <Provider store={this.props.store}>
          <div>
            {content}
            <DevTools />
          </div>
        </Provider>
      );
    }
    return (
      <Provider store={this.props.store}>
        {content}
      </Provider>
    );
  }
}
