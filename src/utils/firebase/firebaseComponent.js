import React, { PropTypes } from 'react';
import { config } from './firebaseReduxSubscriber';
import Firebase       from 'firebase';
import defaultConfig  from './config.js';

const Ref = new Firebase(defaultConfig.appUrl);

const theTypeOf = (a) => {
  return Object.prototype.toString.call(a).slice(8, -1).toLowerCase();
};

function fireBaseComponent (mapping, Component) {
  const StoreConnection = React.createClass({
    getInitialState () {
      return {
        ref:Ref,
        dispatch: config.dispatch
      };
    },
    componentWillMount () {
      let state = mapping;
      if (theTypeOf(mapping) === 'function' ) {
        state = mapping();
      }
      state.forEach((el)=>{
        this.addListeners(el, config);
      });
      window.postRef = Ref.child('coworks');
      window.ref = Ref;
    },
    componentDidUpdate () {
    },
    componentWillUnmount () {
    },
    render () {
      return <Component {...this.props} />;
    },
    addListeners ({address, action, type}, con) {
      Ref.child(address).on(type, (data) => {
        con.dispatch({type:action, payload:data.val()});
      });
    }
  });
  return StoreConnection;
}

exports.Ref = Ref;
export default fireBaseComponent;
