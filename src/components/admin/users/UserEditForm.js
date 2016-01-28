import React                  from 'react';
import Loader                 from 'react-loader';
import { Input, ButtonInput } from 'react-bootstrap';
import MaskedInput            from 'components/common/MaskedInput';

export class UserEditForm extends React.Component {
  onUpdate(e) {
    this.props.adminActions.setUserAttr({
      key: e.target.name,
      value: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let { id } = this.props.params;
    this.props.adminActions.updateUser({
      token: this.props.sessionToken,
      id: id,
      user: {
        first_name:            this.props.user.firstName,
        last_name:             this.props.user.lastName,
        email:                 this.props.user.email,
        phone_number:          this.props.user.phoneNumber.replace(/-/g, ''),
        password:              this.props.user.password,
        password_confirmation: this.props.user.passwordConfirmation,
        precinct_id:           this.props.user.precinctId
      }
    });
  }

  render() {
    let precincts = [<option key={'blank'} value=''>None</option>];
    for (let i = 0; i < this.props.precincts.length; i++) {
      let id = this.props.precincts[i].id;
      precincts.push(<option key={id} value={id}>{this.props.precincts[i].name}</option>);
    }

    return (
      <Loader loaded={this.props.fetched}>
        <h3>Edit User</h3>
        <hr />
        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='text' label='First Name' name='firstName' required={true} value={this.props.user.firstName} onChange={ (e) => this.onUpdate(e) } />
          <Input type='text' label='Last Name' name='lastName' required={true} value={this.props.user.lastName} onChange={ (e) => this.onUpdate(e) } />
          <Input type='email' label='Email' name='email' required={true} value={this.props.user.email} onChange={ (e) => this.onUpdate(e) } />
          <MaskedInput type='text' label='Phone Number' name='phoneNumber' mask='111-111-1111' value={this.props.user.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')} onChange={ (e) => this.onUpdate(e) } />
          <Input type='password' label='New password' name='password' value={this.props.user.password} onChange={ (e) => this.onUpdate(e) } help='Leave blank unless you want to change the current one.' />
          <Input type='password' label='Confirm new password' name='passwordConfirmation' value={this.props.user.passwordConfirmation} onChange={ (e) => this.onUpdate(e) } />
          <Input type='select' label='Assigned precinct' name='precinctId' value={this.props.user.precinctId} onChange={ (e) => this.onUpdate(e) }>
            {precincts}
          </Input>

          <ButtonInput type='submit' bsStyle='primary' value='Update User' />
        </form>
      </Loader>
    );
  }
};

export default UserEditForm;
