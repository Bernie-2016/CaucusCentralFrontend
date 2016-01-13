import React from 'react';
import PrecinctsTable from './PrecinctsTable';

export class PrecinctsTableContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.actions.getAllPrecincts({token: this.props.session.token});
  }

  render () {
    return <PrecinctsTable {...this.props} />;
  }
}

export default PrecinctsTableContainer;
