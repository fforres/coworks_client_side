import React from 'react';
import 'styles/core.scss';
import { NavBar } from '../components';
import styles from 'styles/core.scss';
export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    let theNav = <span></span>;
    const a = false;
    if (a) {
      theNav = <NavBar/>;
    }
    return (
      <div className={styles.fullviewport + ' page-container '}>
        {theNav}
        <div className={styles.fullscreen}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
