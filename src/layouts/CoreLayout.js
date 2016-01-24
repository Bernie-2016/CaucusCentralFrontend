import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'styles/core.scss';

import Footer from 'components/common/Footer';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div className='page-container'>
        <div className='view-container'>
          <div className='row logo-row'>
            <img src='/images/logo.png' alt='Bernie 2016' />
          </div>
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}
