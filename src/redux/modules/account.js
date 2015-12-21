import createReducer from 'utils/createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';
const HIDE_LOGIN_MODAL = 'HIDE_LOGIN_MODAL';
const LOGIN_LOCAL = 'LOGIN_LOCAL';
const REGISTER_USER = 'REGISTER_USER';

// ------------------------------------
// Actions
// ------------------------------------
export const logIn = (data) => ({ type : LOG_IN, payload:data });
export const logOut = (data) => ({ type : LOG_OUT, payload:data });
export const hideLoginModal = () => ({ type : HIDE_LOGIN_MODAL });
export const showLoginModal = () => ({ type : SHOW_LOGIN_MODAL });

export const loginLocal = () =>  ({ type : LOGIN_LOCAL });
export const registerUser = (data) =>  ({ type : REGISTER_USER, payload:data });
export const actions = {
  logIn,
  logOut,
  showLoginModal,
  hideLoginModal,
  loginLocal,
  registerUser
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loggedIn : false,
  isModalShown : false,
  userData : {

  }
};
export default createReducer(initialState, {
  [LOG_IN]  (state, payload = null) {
    return state;
  },
  [LOG_OUT]  (state, payload = null) {
    return initialState;
  },
  [SHOW_LOGIN_MODAL]  (state, payload = null) {
    const ob = {};
    if (!state.loggedIn) {
      ob.isModalShown = true;
    } else {
      ob.isModalShown = false;
    }
    return Object.assign({}, {...state}, {...ob});
  },
  [HIDE_LOGIN_MODAL]  (state, payload = null) {
    const ob = {};
    ob.isModalShown = false;
    return Object.assign({}, {...state}, {...ob});
  },
  [REGISTER_USER] (state, payload = null) {
    if (payload !== null ) {
      return { ...state, loggedIn:true, isModalShown:false, userData: {...payload}};
    }
    return state;
  }
});
