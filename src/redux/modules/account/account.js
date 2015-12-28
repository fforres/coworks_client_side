import createReducer from 'utils/createReducer';
import deepFreeze from 'deep-freeze';

// ------------------------------------
// Constants
// ------------------------------------
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';
const HIDE_LOGIN_MODAL = 'HIDE_LOGIN_MODAL';
const LOGIN_LOCAL = 'LOGIN_LOCAL';
// ------------------------------------
// Actions
// ------------------------------------
export const logIn = (data) => ({ type: LOG_IN, payload: data });
export const logOut = (data) => ({ type: LOG_OUT, payload: data });
export const hideLoginModal = () => ({ type: HIDE_LOGIN_MODAL });
export const showLoginModal = () => ({ type: SHOW_LOGIN_MODAL });

export const loginLocal = (data) => ({ type: LOGIN_LOCAL, payload: data });
export const actions = {
  logIn,
  logOut,
  showLoginModal,
  hideLoginModal,
  loginLocal
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loggedIn: false,
  isModalShown: false,
  userData: {

  }
};
export default createReducer(initialState, {
  [LOG_OUT]  () {
    return initialState;
  },
  [SHOW_LOGIN_MODAL]  (state) {
    deepFreeze(state);
    const ob = {};
    if (!state.loggedIn) {
      ob.isModalShown = true;
    } else {
      ob.isModalShown = false;
    }
    return Object.assign({}, {...state}, {...ob});
  },
  [HIDE_LOGIN_MODAL]  (state) {
    deepFreeze(state);
    const ob = {};
    ob.isModalShown = false;
    return Object.assign({}, {...state}, {...ob});
  },
  [LOG_IN] (state, payload = null) {
    deepFreeze(state);
    if (payload !== null ) {
      return { ...state, loggedIn: true, isModalShown: false, userData: {...payload}};
    }
    return state;
  },
  [LOGIN_LOCAL] (state, payload = null) {
    deepFreeze(state);
    if (payload !== null ) {
      return { ...state, loggedIn: true, isModalShown: false, userData: {...payload}};
    }
    return state;
  }
});
