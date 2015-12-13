import createReducer from 'utils/createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

// ------------------------------------
// Actions
// ------------------------------------
export const toggleSideBar = () => ({ type : TOGGLE_SIDEBAR });
export const actions = {
  toggleSideBar
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  showSidebar:false,
  dockSideBar:false
};

export default createReducer(initialState, {
  [TOGGLE_SIDEBAR] (state) {
    return {...state, dockSideBar: !state.dockSideBar};
  }
});
