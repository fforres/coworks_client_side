import React from 'react';
import 'styles/core.scss';
import { NavBar } from '../components';
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
      <div className='page-container fullscreen'>
        {theNav}
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
