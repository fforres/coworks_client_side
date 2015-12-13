import createReducer from 'utils/createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

// ------------------------------------
// Actions
// ------------------------------------
export const toggleSideBar = () => ({
  type: TOGGLE_SIDEBAR
});
export const actions = {
  toggleSideBar
};

// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer({showSidebar:true}, {
  [TOGGLE_SIDEBAR]: (state) => {
    state.showSidebar = !state.showSidebar;
    return state;
  }
});
