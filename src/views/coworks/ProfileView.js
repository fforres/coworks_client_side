import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as coworksActions } from 'redux/modules/coworks';
import styles from './ProfileView.scss';
import { CoworkProfile } from 'components';

const mapStateToProps = (state) => {
  return {
    coworks: state.coworks.coworks
  };
};
export class HomeView extends Component {
  static propTypes = {
    coworks: PropTypes.object,
    params: PropTypes.shape({
      name: PropTypes.string
    }),
    setCurrentCowork: PropTypes.func
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className={styles['container-with-navbar']}>
        <CoworkProfile {...this.props.params}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, coworksActions)(HomeView);
