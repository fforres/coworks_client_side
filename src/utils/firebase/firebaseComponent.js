import React            from 'react';
import {_Ref, _Dispatch}  from './config';

const theTypeOf = (a) => {
  return Object.prototype.toString.call(a).slice(8, -1).toLowerCase();
};

const fireBaseComponent = (mapping, Component) => {
  const StoreConnection = React.createClass({
    getInitialState () {
      debugger;
      return {
        r : require('./config')._Ref,
        d : require('./config')._Dispatch
      };
    },
    componentWillMount () {
      debugger;
      let state = mapping;
      if (theTypeOf(mapping) === 'function' ) {
        state = mapping();
      }
      state.forEach((el)=>{
        this.addListeners(el);
      });
    },
    componentDidUpdate () {
    },
    componentWillUnmount () {
    },
    render () {
      return <Component {...this.props} />;
    },
    addListeners ({address, action, type}) {
      _Ref.child(address).on(type, (data) => {
        _Dispatch({type:action, payload:data.val()});
      });
    }
  });
  return StoreConnection;
};

exports.setDispatcher = ({dispatch}) => {
  debugger;
  OB._Dispatch = dispatch;
};
exports.Dispatch = _Dispatch;
exports.Ref = _Ref;
exports.fireBaseComponent = fireBaseComponent;
