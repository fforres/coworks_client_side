import React, { PropTypes } from 'react';
import { _Ref } from './config';
import _Dispatch from 'redux/modules';
import { connect } from 'react-redux';

const theTypeOf = (a) => {
  return Object.prototype.toString.call(a).slice(8, -1).toLowerCase();
};

const fireBaseComponent = (mapping, Component) => {
  const mapStateToProps = () => {
    return {
    };
  };
  const StoreConnection = React.createClass({
    propTypes: {
      dispatch: PropTypes.any
    },
    getInitialState () {
      return {
        r: require('./config')._Ref,
        d: require('./config')._Dispatch
      };
    },
    componentWillMount () {
      let state = mapping;
      if (theTypeOf(mapping) === 'function' ) {
        state = mapping();
      }
      state.forEach((el)=>{
        this.addListeners(el);
      });
    },
    render () {
      return <Component {...this.props} />;
    },
    addListeners ({address, action, type}) {
      const { dispatch } = this.props;
      _Ref.child(address).on(type, (data) => {
        dispatch({type: action, payload: data.val()});
      });
    }
  });
  return connect(mapStateToProps)(StoreConnection);
};

exports.Dispatch = _Dispatch;
exports.Ref = _Ref;
exports.fireBaseComponent = fireBaseComponent;
