import createReducer from 'utils/createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const LOG_IN = 'LOG_IN';
const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';
const HIDE_LOGIN_MODAL = 'HIDE_LOGIN_MODAL';
const LOGIN_FACEBOOK = 'LOGIN_FACEBOOK';
const LOGIN_GOOGLE = 'LOGIN_GOOGLE';
const LOGIN_LOCAL = 'LOGIN_LOCAL';
const LOGIN_TWITTER = 'LOGIN_TWITTER';
const REGISTER_USER = 'REGISTER_USER';

// ------------------------------------
// Actions
// ------------------------------------
export const logIn = (data) => ({ type : LOG_IN, payload:data });
export const hideLoginModal = () => ({ type : HIDE_LOGIN_MODAL });
export const showLoginModal = () => ({ type : SHOW_LOGIN_MODAL });

export const loginFacebook = () =>  ({ type : LOGIN_FACEBOOK });
export const loginGoogle = () =>  ({ type : LOGIN_GOOGLE });
export const loginLocal = () =>  ({ type : LOGIN_LOCAL });
export const loginTwitter = () =>  ({ type : LOGIN_TWITTER });
export const registerUser = (data) =>  ({ type : REGISTER_USER, payload:data });
export const actions = {
  logIn,
  showLoginModal,
  hideLoginModal,
  loginFacebook,
  loginGoogle,
  loginLocal,
  loginTwitter,
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
