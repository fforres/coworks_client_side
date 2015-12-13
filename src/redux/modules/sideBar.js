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
  dockSideBar:true
};

export default createReducer(initialState, {
  [TOGGLE_SIDEBAR] (state, action) {
    return {...state, dockSideBar: !state.dockSideBar};
  }
});
