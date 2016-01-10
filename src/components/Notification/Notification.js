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
      let element = {...el};
      element = this.insertAddCallBacks(element, i);
      element = this.insertRemoveCallBacks(element, i);
      if (el && !el.showed) {
        this.refs.notificationSystem.addNotification(element);
      }
    });
  }

  render () {
    return (
      <NotificationSystem ref='notificationSystem' />
    );
  }

  insertAddCallBacks (el, i) {
    el.addCallBacks = [];
    if (Object.prototype.toString.call(el.onAdd).slice(8, -1).toLowerCase() === 'function') {
      el.addCallBacks.concat(el.onAdd);
    }
    el.addCallBacks.push(() => {
      this.props.showedNotification(i);
    });
    el.onAdd = function () {
      this.addCallBacks.forEach((callbacks) => {
        callbacks();
      });
    };
    return el;
  }

  insertRemoveCallBacks (el, i) {
    el.removeCallbacks = [];
    if (Object.prototype.toString.call(el.onRemove).slice(8, -1).toLowerCase() === 'function') {
      el.removeCallbacks.concat(el.onRemove);
    }
    el.removeCallbacks.push(() => {
      this.props.removeNotification(i);
    });
    el.onRemove = function () {
      this.removeCallbacks.forEach((callbacks) => {
        callbacks();
      });
    };
    return el;
  }
}


export default connect(mapStateToProps, notificationsActions)(NavBar);
