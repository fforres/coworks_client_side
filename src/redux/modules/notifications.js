import createReducer from 'utils/createReducer';
import deepFreeze from 'deep-freeze';

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
    deepFreeze(state);
    if (payload !== null) {
      const newPayload = Object.assign({}, payload);
      newPayload.showed = false;
      if (!payload.position) {
        newPayload.position = 'br';
      }
      const middleState = { ...state, notifications: state.notifications.concat(newPayload) };
      return { ...middleState };
    }
    return state;
  },
  [REMOVE_NOTIFICATION] (state, payload = null) {
    deepFreeze(state);
    if (payload !== null && state.notifications[payload]) {
      const newNotif = [...state.notifications];
      newNotif.splice(payload, 1);
      return { ...state, notifications: newNotif };
    }
    return state;
  },
  [SHOWED_NOTIFICATION] (state, payload = null) {
    deepFreeze(state);
    if (payload !== null) {
      const Notif = { ...state.notifications[payload], showed:true };
      const Notifications = [...state.notifications];
      Notifications[payload] = Notif;
      return { ...state, notifications: Notifications };
    }
    return state;
  },
  [RESET_NOTIFICATIONS] (state) {
    deepFreeze(state);
    const newState = { ...state, notifications: initialState.notifications };
    return newState;
  }
});
