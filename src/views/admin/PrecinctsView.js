import React                      from 'react';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import * as adminActions          from 'actions/admin';
import PrecinctsTableContainer    from 'components/admin/precincts/PrecinctsTableContainer';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(adminActions, dispatch)
});

export class PrecinctsView extends React.Component {
  renderMessage () {
    let message = '';
    if (this.props.adminState.gettingState) {
      message = 'Retrieving Precincts';
    }
    return message;
  }

  render () {
    return (
      <div className='container admin-dashboard-view'>
        <h1>{this.props.adminState.state.name}</h1>
        <div className='message'>{this.renderMessage()}</div>
        <PrecinctsTableContainer {...this.props}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrecinctsView);
