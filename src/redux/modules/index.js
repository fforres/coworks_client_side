import { combineReducers } from 'redux';
import { routeReducer }    from 'redux-simple-router';
import counter             from './counter';
import sideBar             from './sideBar';

export default combineReducers({
  counter,
  sideBar,
  router : routeReducer
});
