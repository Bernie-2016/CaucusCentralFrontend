import React from 'react';
import StatesTable from './StatesTable';

export class StatesTableContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.actions.getAllStates({token: this.props.session.token});
  }

  render () {
    return <StatesTable {...this.props} />;
  }
}

export default StatesTableContainer;
