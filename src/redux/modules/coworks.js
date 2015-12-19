import createReducer from 'utils/createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const UPDATE_MAP_CENTER   =   'UPDATE_MAP_CENTER';
const REQUEST_COWORKS     =   'REQUEST_COWORKS';
const ADD_COWORK          =   'ADD_COWORK';
const SELECT_COWORK       =   'SELECT_COWORK';
const HOVER_ENTER_COWORK  =   'HOVER_ENTER_COWORK';
const HOVER_LEAVE_COWORK  =   'HOVER_LEAVE_COWORK';

// ------------------------------------
// Actions
// ------------------------------------
export const requestCoworks = () => ({
  type: REQUEST_COWORKS
});
export const addCowork = () => ({
  type: ADD_COWORK
});
export const selectCowork = (id) => ({
  type: SELECT_COWORK,
  payload: id
});
export const hoverEnterCowork = (id) => ({
  type: HOVER_ENTER_COWORK,
  payload: id
});
export const hoverLeaveCowork = (id) => ({
  type: HOVER_LEAVE_COWORK,
  payload: id
});
export const updateMapCenter = (pos) => ({
  type: UPDATE_MAP_CENTER,
  payload: pos
});
export const actions = {
  requestCoworks, selectCowork, hoverEnterCowork, hoverLeaveCowork, updateMapCenter, addCowork
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  coworks: [],
  coworksFiltered: [],
  selected: -1,
  hovered: -1,
  map: {
    zoom: 9,
    center: {
      lat: 59.938043,
      lng: 30.337157
    },
    defaultCenter: {
      lat: 59.938043,
      lng: 30.337157
    }
  }
};

export default createReducer(initialState, {
  [REQUEST_COWORKS] (state, payload = null) {
    if (payload !== null ) {
      return { ...state, coworks: payload };
    }
    return state;
  },
  [ADD_COWORK] (state, payload = null) {
    if (payload !== null ) {
      const newCoworks = [...state.coworks, payload];
      return { ...state, coworks: newCoworks };
    }
    return state;
  },
  [SELECT_COWORK] (state, payload) {
    // payload = ID del elemento Hovereado
    if (payload === state.selected) {
      return {...state, selected: initialState.selected};
    }
    return {...state, selected: payload};
  },
  [HOVER_ENTER_COWORK] (state, payload) {
    // payload = ID del elemento Hovereado
    if (payload !== state.hovered) {
      return {...state, hovered: payload};
    }
    return state;
  },
  [HOVER_LEAVE_COWORK] (state, payload) {
    // payload = ID del elemento Hovereado
    if (payload !== state.hovered) {
      return state;
    }
    return {...state, hovered: initialState.hovered};
  },
  [UPDATE_MAP_CENTER] (state, payload) {
    const clone = JSON.parse(JSON.stringify(state));
    clone.map.center = payload;
    return clone;
  }
});
