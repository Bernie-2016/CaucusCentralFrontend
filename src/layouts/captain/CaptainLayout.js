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
              {/*}
              // We'll want to hide this nav when no
              // user has logged in yet once we
              // include user auth in the state.
              */}
              <CaptainTopNav />

              <div className="container-fluid">
              { this.props.children }
              </div>
            </div>
        );
    }
}
