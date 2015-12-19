import React, { PropTypes } from 'react';
import { config } from './firebaseReduxSubscriber';
import { list } from '../../data/index.js';
const theTypeOf = (a) => {
  return Object.prototype.toString.call(a).slice(8, -1).toLowerCase();
};

function fireBaseComponent (mapping, Component) {
  const StoreConnection = React.createClass({
    getInitialState () {
      return {
        ref:config.ref,
        dispatch: config.dispatch
      };
    },
    componentWillMount () {
      let state = mapping;
      window.theList = list();
      if (theTypeOf(mapping) === 'function' ) {
        state = mapping();
      }
      state.forEach((el)=>{
        this.addListeners(el, config);
      });
      window.postRef = config.ref.child('coworks');
    },
    componentDidUpdate () {
    },
    componentWillUnmount () {
    },
    render () {
      return <Component {...this.props} />;
    },
    addListeners ({address, action, type}, con) {
      con.ref.child(address).on(type, (data) => {
        con.dispatch({type:action, payload:data.val()});
      });
    }
  });
  return StoreConnection;
}

export default fireBaseComponent;
