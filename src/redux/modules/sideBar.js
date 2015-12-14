import createReducer from 'utils/createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
const HIDE_SIDEBAR = 'HIDE_SIDEBAR';

// ------------------------------------
// Actions
// ------------------------------------
export const toggleSideBar = () => ({ type : TOGGLE_SIDEBAR });
export const showSideBar = () => ({ type : SHOW_SIDEBAR });
export const hideSideBar = () => ({ type : HIDE_SIDEBAR });
export const actions = {
  toggleSideBar, showSideBar, hideSideBar
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isShown:false,
  isDocked:false
};

export default createReducer(initialState, {
  [TOGGLE_SIDEBAR] (state) {
    return {...state, isShown: !state.isDocked};
  },
  [SHOW_SIDEBAR] (state) {
    return {...state, isShown: true};
  },
  [HIDE_SIDEBAR] (state) {
    return {...state, isShown: true};
  }
});
