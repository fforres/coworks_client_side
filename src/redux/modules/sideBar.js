import createReducer from 'utils/createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
const SIDEBAR_DOCKED = 'SIDEBAR_DOCKED';

// ------------------------------------
// Actions
// ------------------------------------
export const toggle = () => ({
  type: TOGGLE_SIDEBAR
});
export const dock = () => ({
  type: TOGGLE_SIDEBAR
});
export const actions = {
  toggle, dock
};

// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer({}, {
  [TOGGLE_SIDEBAR]: (state) => {
    state.showSidebar = !state.showSidebar;
  },
  [SIDEBAR_DOCKED]: (state) => {
    state.sidebarDocked = !state.sidebarDocked;
  }
});
