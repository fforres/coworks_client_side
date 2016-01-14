import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as notificationsActions } from 'redux/modules/notifications';
import NotificationSystem from 'react-notification-system';

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications.notifications
  };
};

class NavBar extends Component {
  static propTypes = {
    notifications: PropTypes.arrayOf(PropTypes.object),
    addNotification: PropTypes.func,
    removeNotification: PropTypes.func,
    showedNotification: PropTypes.func,
    clearNotification: PropTypes.func
  };

  componentWillMount () {
    this.props.clearNotification();
  }

  componentDidMount () {
  }

  componentDidUpdate () {
    this.props.notifications.forEach((el, i) => {
      let element = { ...el };
      element = this.insertAddCallBacks(element, i);
      element = this.insertRemoveCallBacks(element, i);
      if (el && !el.showed) {
        this.refs.notificationSystem.addNotification(element);
      }
    });
  }

  insertAddCallBacks (el, i) {
    const newEl = Object.assign({}, el);
    newEl.addCallBacks = [];
    if (Object.prototype.toString.call(el.onAdd).slice(8, -1).toLowerCase() === 'function') {
      el.addCallBacks.concat(el.onAdd);
    }
    newEl.addCallBacks.push(() => {
      this.props.showedNotification(i);
    });
    newEl.onAdd = function () {
      this.addCallBacks.forEach((callbacks) => {
        callbacks();
      });
    };
    return newEl;
  }

  insertRemoveCallBacks (el, i) {
    const newEl = Object.assign({}, el);
    newEl.removeCallbacks = [];
    if (Object.prototype.toString.call(el.onRemove).slice(8, -1).toLowerCase() === 'function') {
      el.removeCallbacks.concat(el.onRemove);
    }
    newEl.removeCallbacks.push(() => {
      this.props.removeNotification(i);
    });
    newEl.onRemove = function () {
      this.removeCallbacks.forEach((callbacks) => {
        callbacks();
      });
    };
    return newEl;
  }

  render () {
    return (
      <NotificationSystem ref='notificationSystem' />
    );
  }
}


export default connect(mapStateToProps, notificationsActions)(NavBar);
