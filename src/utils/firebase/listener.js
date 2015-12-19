import Firebase from 'firebase';
import { config } from './firebaseReduxSubscriber';
const dispatcher = config.dispatch;
const theTypeOf = (a) => {
  return Object.prototype.toString.call(a).slice(8, -1).toLowerCase();
};
const listenTo = (firebaseRoute = '', fireBaseAction = null, reduxAction = null) => {
  const fbRoute = firebaseRoute;
  const fbAction = fireBaseAction;
  let rdxAction = reduxAction;
  /*
    if fireBaseAction is an object,
    we asume they are using the default
    firebase action ''
  */
  if (theTypeOf(fbAction) !== 'string' && theTypeOf(fbAction) === 'object') {
    rdxAction = fbAction;
  }

  config.listeners = config.listeners | [];
  const coworksRef = config.ref.child('coworks');
  coworksRef.on('value', (snap) => {
    // console.log(snap.val());
  });
  coworksRef.on('child_added', (snap) => {
    // console.log(snap.val());
  });
};
const showConfig = () => {
  console.log(config);
};
export default {
  listenTo, showConfig
};
