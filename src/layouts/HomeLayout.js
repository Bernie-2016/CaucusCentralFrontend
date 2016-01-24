import React from 'react';

export default class HomeLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return (
      <div className='row'>
        <div className='col-md-6 col-md-offset-3 col-xs-12'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
