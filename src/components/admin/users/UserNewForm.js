import React                                from 'react';
import Loader                               from 'react-loader';
import { FormControls, Input, ButtonInput } from 'react-bootstrap';

export class UserNewForm extends React.Component {
  onUpdate(e) {
    this.props.adminActions.setInvitationAttr({
      key: e.target.name,
      value: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.adminActions.createInvitation({
      invitation: {
        email: this.props.user.email,
        privilege: this.props.user.privilege,
        precinct_id: this.props.user.precinctId
      },
      token: this.props.sessionToken
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
        <h3 className='text-center'>Invite a new user</h3>
        <hr />
        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='email' label='Email' name='newEmail' required={true} value={this.props.user.email} onChange={ (e) => this.onUpdate(e) } />
          
          <Input type='radio' label='Captain' name='privilege' value='captain' checked={this.props.user.privilege == "captain"} onChange={ (e) => this.onUpdate(e) } />
          <Input type='radio' label='Organizer' name='privilege' value='organizer' checked={this.props.user.privilege == "organizer"} onChange={ (e) => this.onUpdate(e) } />
          
          <Input type='select' label='Assigned precinct' name='precinctId' value={this.props.user.precinctId} onChange={ (e) => this.onUpdate(e) }>
            {precincts}
          </Input>

          <ButtonInput type='submit' bsStyle='primary' value='Invite User' />
        </form>
      </Loader>
    );
  }
}

export default UserNewForm;
