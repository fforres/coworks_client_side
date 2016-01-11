import createReducer from 'utils/createReducer';
import deepFreeze from 'deep-freeze';

// ------------------------------------
// Constants
// ------------------------------------
const UPDATE_MAP_CENTER = 'UPDATE_MAP_CENTER';
const REQUEST_COWORKS = 'REQUEST_COWORKS';
const ADD_COWORK = 'ADD_COWORK';
const SELECT_COWORK = 'SELECT_COWORK';
const HOVER_ENTER_COWORK = 'HOVER_ENTER_COWORK';
const HOVER_LEAVE_COWORK = 'HOVER_LEAVE_COWORK';
const SET_CURRENT_COWORK = 'SET_CURRENT_COWORK';
const UNSET_CURRENT_COWORK = 'UNSET_CURRENT_COWORK';
const SET_MY_COWORKS = 'SET_MY_COWORKS';
const UNSET_MY_COWORKS = 'UNSET_MY_COWORKS';

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
export const setCurrentCowork = (daya) => ({
  type: SET_CURRENT_COWORK,
  payload: daya
});
export const unsetCurrentCowork = () => ({
  type: UNSET_CURRENT_COWORK
});

export const setMyCoworks = (daya) => ({
  type: SET_MY_COWORKS,
  payload: daya
});
export const unsetMyCoworks = () => ({
  type: UNSET_MY_COWORKS
});

export const actions = {
  requestCoworks,
  selectCowork,
  hoverEnterCowork,
  hoverLeaveCowork,
  updateMapCenter,
  addCowork,
  setCurrentCowork,
  unsetCurrentCowork,
  setMyCoworks,
  unsetMyCoworks
};


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  coworks: {},
  myCoworks: {},
  coworksFiltered: {},
  images: {
    profile:'',
    background:''
  },
  selected: '',
  hovered: '',
  current: null,
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
    deepFreeze(state);
    if (payload !== null ) {
      return { ...state, coworks: payload };
    }
    return state;
  },
  [ADD_COWORK] (state, payload = null) {
    deepFreeze(state);
    if (payload !== null ) {
      Object.keys(payload).forEach((el)=>{
        payload[el].id = el;
      });
      return { ...state, coworks: Object.assign({}, {...state.coworks}, {...payload})};
    }
    return state;
  },
  [SELECT_COWORK] (state, payload) {
    deepFreeze(state);
    if (payload === state.selected) {
      return {...state, selected: initialState.selected};
    }
    return {...state, selected: payload};
  },
  [HOVER_ENTER_COWORK] (state, payload) {
    deepFreeze(state);
    if (payload !== state.hovered) {
      return {...state, hovered: payload};
    }
    return state;
  },
  [HOVER_LEAVE_COWORK] (state, payload) {
    deepFreeze(state);
    if (payload !== state.hovered) {
      return state;
    }
    return {...state, hovered: initialState.hovered};
  },
  [UPDATE_MAP_CENTER] (state, payload) {
    deepFreeze(state);
    const clone = JSON.parse(JSON.stringify(state));
    clone.map.center = payload;
    return clone;
  },


  [SET_CURRENT_COWORK] (state, payload) {
    deepFreeze(state);
    if (payload === null) {
      return {...state, current: 'notExistent'};
    }
    if (typeof payload === 'object') {
      payload[Object.keys(payload)[0]].id = Object.keys(payload)[0];
      return {...state, current: payload[Object.keys(payload)[0]]};
    }
    return state;
  },
  [UNSET_CURRENT_COWORK] (state) {
    deepFreeze(state);
    return {...state, current: null};
  },


  [SET_MY_COWORKS] (state, payload) {
    if (payload === null) {
      return {...state, myCoworks: {}};
    }
    if (typeof payload === 'object') {
      return {...state, myCoworks: payload};
    }
    return {...state, myCoworks: {}};
  },
  [UNSET_MY_COWORKS] (state) {
    return {...state, myCoworks: null};
  }


});
