import createReducer from 'utils/createReducer';

// ------------------------------------
// Constants
// ------------------------------------
const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
const SHOWED_NOTIFICATION = 'SHOWED_NOTIFICATION';
const RESET_NOTIFICATIONS = 'RESET_NOTIFICATIONS';

// ------------------------------------
// Actions
// ------------------------------------
export const addNotification = (data) => ({
  type: ADD_NOTIFICATION,
  payload: data
});
export const removeNotification = (data) => ({
  type: REMOVE_NOTIFICATION,
  payload: data
});
export const showedNotification = (data) => ({
  type: SHOWED_NOTIFICATION,
  payload: data
});
export const clearNotification = () => ({
  type: RESET_NOTIFICATIONS
});
export const actions = {
  addNotification, removeNotification, showedNotification, clearNotification
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  notifications: []
};

export default createReducer(initialState, {
  [ADD_NOTIFICATION] (state, payload = null) {
    if (payload !== null ) {
      payload.showed = false;
      if (!payload.position) {
        payload.position = 'br';
      }
      return {...state, notifications: state.notifications.concat(payload) };
    }
    return state;
  },
  [REMOVE_NOTIFICATION] (state, payload = null) {
    if (payload !== null && state.notifications[payload]) {
      const newNotif = state.notifications;
      newNotif.splice(payload, 1);
      return {...state, notifications: newNotif };
    }
    return state;
  },
  [SHOWED_NOTIFICATION] (state, payload = null) {
    if (payload !== null ) {
      const newNotif = state.notifications;
      newNotif[payload].showed = true;
      return {...state, notifications: newNotif };
    }
    return state;
  },
  [RESET_NOTIFICATIONS] (state) {
    const newState = {...state, notifications: initialState.notifications };
    return newState;
  }
});
