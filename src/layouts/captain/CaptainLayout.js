import React from 'react';
import CaptainTopNav from 'components/captain/CaptainTopNav';
// Import styles here.

export default class CaptainLayout extends React.Component {
    static propTypes = {
        children: React.PropTypes.element
    }

    render() {
        return (
            <div>
              <CaptainTopNav />
              { this.props.children }
            </div>
        );
    }
}
