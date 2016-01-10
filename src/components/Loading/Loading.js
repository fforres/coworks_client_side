import React, { Component } from 'react';

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
