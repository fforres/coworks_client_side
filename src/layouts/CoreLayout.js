import React from 'react';
import 'styles/core.scss';
import { NavBar } from '../components';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div className='page-container'>
        <NavBar/>
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
