import createReducer from 'utils/createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const REQUEST_COWORKS = 'REQUEST_COWORKS';

// ------------------------------------
// Actions
// ------------------------------------
export const requestCoworks = () => ({ type : REQUEST_COWORKS });
export const actions = {
  requestCoworks
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  coworks:[],
  coworksFiltered:[],
  map:{
    zoom:9,
    center: {
      lat: 59.938043,
      lng: 30.337157
    }
  }
};

export default createReducer(initialState, {
  [REQUEST_COWORKS] (state) {
    const { list } = require('../../data');
    return {...state, coworks: list()};
  }
});
