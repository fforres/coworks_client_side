import createReducer from 'utils/createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

// ------------------------------------
// Actions
// ------------------------------------
export const increment = () => ({ type: COUNTER_INCREMENT });
export const actions = {
  increment
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0;
export default createReducer(initialState, {
  [COUNTER_INCREMENT]: (state) => state + 1
});
