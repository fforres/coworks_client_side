import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import style from './Pin.scss';

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.any.isRequired
  };
  static defaultProps = {};

  constructor (props) {
    super(props);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render () {
    return (
       <div className={style.pin} >
          {this.props.text}
       </div>
    );
  }
}
