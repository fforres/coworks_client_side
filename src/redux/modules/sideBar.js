import createReducer from 'utils/createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const TOGGLE_DOCK = 'TOGGLE_DOCK';
const SHOW_DOCK = 'SHOW_DOCK';
const HIDE_DOCK = 'HIDE_DOCK';
const TOGGLE_SHOW = 'TOGGLE_SHOW';
const SHOW_SHOW = 'SHOW_SHOW';
const HIDE_SHOW = 'HIDE_SHOW';

// ------------------------------------
// Actions
// ------------------------------------
export const toggleDock = () => ({ type: TOGGLE_DOCK });
export const showDock = () => ({ type: SHOW_DOCK });
export const hideDock = () => ({ type: HIDE_DOCK });
export const toggleShow = () => ({ type: TOGGLE_SHOW });
export const showShow = () => ({ type: SHOW_SHOW });
export const hideShow = () => ({ type: HIDE_SHOW });

export const actions = {
  toggleDock,
  showDock,
  hideDock,
  toggleShow,
  showShow,
  hideShow
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isShown: false,
  isDocked: false
};

export default createReducer(initialState, {
  [TOGGLE_DOCK] (state) {
    return {...state, isDocked: !state.isDocked};
  },
  [SHOW_DOCK] (state) {
    return {...state, isDocked: true};
  },
  [HIDE_DOCK] (state) {
    return {...state, isDocked: false};
  },
  [TOGGLE_SHOW] (state) {
    return {...state, isShown: !state.isShown};
  },
  [SHOW_SHOW] (state) {
    return {...state, isShown: true};
  },
  [HIDE_SHOW] (state) {
    return {...state, isShown: false};
  }
});
