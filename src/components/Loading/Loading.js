import React, { Component, PropTypes } from 'react';
import style from './Loading.scss';

const mapStateToProps = (state) => {
  return {
    isShown: state.sideBar.isShown,
    isDocked: state.sideBar.isDocked
  };
};

class Loading extends Component {
  render () {
    return (
      <center>
        <h1><i className='fa fa-spinner fa-spin' /> </h1>
        <h1> Loading... </h1>
      </center>
    );
  }
}
export default Loading;
