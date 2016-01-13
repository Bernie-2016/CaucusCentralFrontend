import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import captainActions         from 'actions/captain';
import CaptainEntry           from 'components/captain/CaptainEntry';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(captainActions, dispatch)
});

export class DashboardView extends React.Component {

  componentWillMount() {
    if(this.props.session.precinctId !== undefined) {
      this.props.actions.getPrecinct({
        id: this.props.session.precinctId,
        token: this.props.session.token
      });
    }
  }

  render() {
    if(this.props.session.precinctId === undefined) {
      return (
        <div className='container'>
          <div className='col-md-12'>
            <h1>Unassigned</h1>
            <p>You are not currently assigned to any precinct.</p>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <CaptainEntry {...this.props} />
            </div>
          </div>
        </div>
      );
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
