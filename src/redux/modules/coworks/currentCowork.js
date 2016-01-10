import createReducer from 'utils/createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const SET_CURRENT_COWORK = 'SET_CURRENT_COWORK';
const UPDATE_CURRENT_COWORK = 'UPDATE_CURRENT_COWORK';
const UNSET_CURRENT_COWORK = 'UNSET_CURRENT_COWORK';
const COWORK_UPDATING = 'COWORK_UPDATING';
const COWORK_UPDATED = 'COWORK_UPDATED';

// ------------------------------------
// Actions
// ------------------------------------
export const setCurrentCowork = (daya) => ({
  type: SET_CURRENT_COWORK,
  payload: daya
});
export const unsetCurrentCowork = () => ({
  type: UNSET_CURRENT_COWORK
});
export const updateCurrentCowork = (payload) => ({
  type: UPDATE_CURRENT_COWORK,
  payload
});
export const coworkUpdating = () => ({
  type: COWORK_UPDATING
});
export const coworkUpdated = () => ({
  type: COWORK_UPDATED
});

export const actions = {
  setCurrentCowork,
  updateCurrentCowork,
  unsetCurrentCowork,
  coworkUpdating,
  coworkUpdated
};


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  current: null,
  newCowork: null,
  isUpdating: false
};

export default createReducer(initialState, {
  [SET_CURRENT_COWORK] (state, payload) {
    if (payload === null) {
      return {...state, current: 'notExistent'};
    }
    if (typeof payload === 'object') {
      const cowork = payload[Object.keys(payload)[0]];
      cowork.id = Object.keys(payload)[0];
      return {...state, current: cowork, newCowork: cowork};
    }
    return state;
  },
  [UPDATE_CURRENT_COWORK] (state, payload) {
    if (payload !== null) {
      return {...state, newCowork:payload};
    }
    return state;
  },
  [UNSET_CURRENT_COWORK] (state) {
    return {...state, current: null};
  },
  [COWORK_UPDATING] (state) {
    return {...state, isUpdating: true};
  },
  [COWORK_UPDATED] (state) {
    return {...state, isUpdating: false};
  }
});
