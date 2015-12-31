import React from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import adminActions         from 'actions/admin/';
import SVGMap from 'components/SVGMap/SVGMap';

export class SVGMapContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <SVGMap precincts={this.props.precincts} />;
  }
}

const mapStateToProps = (state) => ({
  precincts : state.adminPrecincts.precincts
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SVGMapContainer);
