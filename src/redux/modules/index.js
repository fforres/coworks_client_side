import { combineReducers } from 'redux';
import { routeReducer }    from 'redux-simple-router';
import counter             from './counter';
import sideBar             from './sideBar';
import coworks             from './coworks';
import account             from './account';

export default combineReducers({
  counter,
  sideBar,
  coworks,
  account,
  router : routeReducer
});
