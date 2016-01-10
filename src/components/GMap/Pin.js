import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import style from './Pin.scss';

class MyPin extends Component {
  static propTypes = {
    text: PropTypes.any.isRequired,
    identificator: PropTypes.any.isRequired
  };

  constructor (props) {
    super(props);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render () {
    const theClass = (() => {
      const str = [style.pin];
      return str.join(' ');
    })();
    return (
      <div className={theClass} >
         {this.props.text}
      </div>
    );
  }
}

export default MyPin;
