import React from 'react';
import Precinct from './Precinct';

export class PrecinctContainer extends React.Component {
  componentWillMount () {
    let { id } = this.props.params;
    this.props.actions.getPrecinct({id: id, token: this.props.session.token});
  }

  render () {
    return <Precinct {...this.props} />;
  }
}

export default PrecinctContainer;
