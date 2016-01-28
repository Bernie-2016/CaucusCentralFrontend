import React                  from 'react';
import Loader                 from 'react-loader';
import { Link }               from 'react-router';
import { Input, ButtonInput } from 'react-bootstrap';

export class PrecinctEditForm extends React.Component {
  onUpdate(e) {
    this.props.adminActions.setPrecinctAttr({
      key: e.target.name, 
      value: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let { id } = this.props.params;
    this.props.adminActions.updatePrecinct({
      token: this.props.sessionToken,
      id: id,
      precinct: {
        name: this.props.precinct.name,
        county: this.props.precinct.county,
        total_delegates: this.props.precinct.delegates
      }
    });
  }

  render() {
    return (
      <Loader loaded={this.props.fetched}>
        <p className='back-link'>
          <Link to='#' onClick={this.props.history.goBack}>&laquo; Back</Link>
        </p>
        <h3 className='text-center'>Edit {this.props.precinct.name}</h3>
        <p className='text-center'>Precinct in county {this.props.precinct.county}.</p>
        <hr />
        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='text' label='Precinct name' name='name' required={true} value={this.props.precinct.name} onChange={ (e) => this.onUpdate(e) } />
          <Input type='text' label='County' name='county' required={true} value={this.props.precinct.county} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label='Delegates' name='delegates' required={true} value={this.props.precinct.delegates} onChange={ (e) => this.onUpdate(e) } />

          <ButtonInput type='submit' bsStyle='primary' value='Update Precinct' />
        </form>
      </Loader>
    );
  }
}

export default PrecinctEditForm;
