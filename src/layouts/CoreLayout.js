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
      <div className='container'>
        <div className='view-container'>
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}
