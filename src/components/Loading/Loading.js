import React, { Component, PropTypes } from 'react';
import style from './Loading.scss';

class Loading extends Component {
  render () {
    return (
      <div>
        <center>
          <h1><i className='fa fa-spinner fa-spin' /> </h1>
          <h1> Loading... </h1>
        </center>
      </div>
    );
  }
}
export { Loading };
export default Loading;
