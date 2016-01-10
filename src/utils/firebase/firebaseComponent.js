import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { _Ref } from './config';
let _Dispatch = null;
const theTypeOf = (a) => {
  return Object.prototype.toString.call(a).slice(8, -1).toLowerCase();
};

const fireBaseComponent = (mapping, Component) => {
  const mapStateToProps = (state) => {
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
      const react = React;
      if (theTypeOf(mapping) === 'function' && theTypeOf(Component) !== 'undefined') {
        const state = mapping();
        if (_Dispatch === null) {
          _Dispatch = this.props.dispatch;
        }
        state.forEach((el)=>{
          this.addListeners(el);
        });
      }
    },
    render () {
      if (Component) {
        return <Component {...this.props} />;
      } else {
        return <mapping {...this.props} />;
      }
    },
    addListeners ({address, action, type, orderByChild, equalTo}) {
      const { dispatch } = this.props;
      let r = _Ref.child(address);
      if (orderByChild) {
        r = r.orderByChild(orderByChild);
      }
      if (equalTo) {
        r = r.equalTo(equalTo);
      }
      r.on(type, (data) => {
        dispatch({type: action.type, payload: data.val()});
      });
    }
  });
  return connect(mapStateToProps)(StoreConnection);
};

const fireBaseMap = (arr) => {
  let CurrentArray = arr;
  if (theTypeOf(arr) === 'object') {
    CurrentArray = [];
    CurrentArray.push(arr);
  }
  const __Ref = require('./config')._Ref;
  const __Dispatch = (_Dispatch) ? _Dispatch : require('./config')._Dispatch;

  CurrentArray.forEach((el) => {
    const {address, action, type, orderByChild, equalTo} = el;
    let r = __Ref.child(address);
    if (orderByChild) {
      r = r.orderByChild(orderByChild);
    }
    if (equalTo) {
      r = r.equalTo(equalTo);
    }
    r.on(type, (data) => {
      __Dispatch({type: action.type, payload: data.val()});
    });
  });
};
exports.fireBaseMap = fireBaseMap;
exports.Dispatch = _Dispatch;
exports.Ref = _Ref;
exports.fireBaseComponent = fireBaseComponent;
