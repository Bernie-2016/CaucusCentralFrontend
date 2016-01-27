import React from 'react';

export default class HomeLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
