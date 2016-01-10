import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './Errors.scss';

class Error404 extends Component {
  render () {
    return (
      <div className='col-xs-12'>
        <center>
          <div className={style['error-404']}>
            <div className={style['error-code']}>404 <i className='fa fa-warning'></i></div>
            <h2 className='font-bold'>Oops 404! <br/> No pudimos encontrar esta página! </h2>
            <div className={style['.error-desc']}>
              <p>
                Sorry, but the page you are looking for was either not found or does not exist.
                <br/>
                Try refreshing the page or click the button below to go back to the Homepage.
              </p>
              <div>
                <br/>
                <Link to='/' className='btn btn-primary'>
                  <span className='glyphicon glyphicon-home'></span> Go back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
export default Error404;
