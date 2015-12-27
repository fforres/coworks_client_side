import React from 'react';
import 'styles/core.scss';
import { NavBar, LoginModal } from '../components';

import styles from 'styles/core.scss';
export default class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return (
      <div id='coreLayout'>
        <NavBar/>
        <div>
          {this.props.children}
        </div>
        <LoginModal />
      </div>
    );
  }
}
