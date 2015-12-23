import createReducer from 'utils/createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';

// ------------------------------------
// Actions
// ------------------------------------
export const toggleLoginForm = () => ({ type : TOGGLE_LOGIN_FORM});
export const actions = {
  toggleLoginForm
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  logInFormShown : true
};
export default createReducer(initialState, {
  [TOGGLE_LOGIN_FORM] (state) {
    return { ...state, logInFormShown: !state.logInFormShown };
  }
});
