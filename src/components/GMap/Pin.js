import React, { Component, PropTypes } from 'react';
import style from './Pin.scss';

export default class MyPin extends Component {
  static propTypes = {
    className: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    id: PropTypes.string,
    key: PropTypes.string,
    children: PropTypes.any
  };

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div {...this.props}>
         {this.props.children}
      </div>
    );
  }

  hoveringPin (e) {
    console.log(e);
  }
}
