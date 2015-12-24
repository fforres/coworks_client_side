import { combineReducers } from 'redux';
import { routeReducer }    from 'redux-simple-router';
import counter             from './counter';
import sideBar             from './sideBar';
import coworks             from './coworks';
import account             from './account/account';
import accountModal       from './account/modal';

export default combineReducers({
  counter,
  sideBar,
  coworks,
  account,
  accountModal,
  router : routeReducer
});
