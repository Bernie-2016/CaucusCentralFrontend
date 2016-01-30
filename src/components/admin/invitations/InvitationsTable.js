import React                        from 'react';
import { Link }                     from 'react-router';
import Loader                       from 'react-loader';
import { Table, Thead, Th, Tr, Td } from 'reactable';
import _                            from 'lodash';

export class InvitationsTable extends React.Component {
  invitationPrecinctLink(invitation) {
    if(invitation.precinct_id !== undefined) {
      return (
        <Link to={'/admin/states/' + invitation.precinct_state + '/precincts/' + invitation.precinct_id}>
          {invitation.precinct_name}
        </Link>
      );
    }
    else {
      return (
        <p>N/A</p>
      );
    }
  }

  resend(e) {
    e.preventDefault();
    const invitationId = e.target.getAttribute('data-id');
    if(confirm('Are you sure you want to resend this invitation?')) {
      this.props.adminActions.resendInvitation({
        token: this.props.sessionToken,
        id: invitationId
      });
    }
  }

  render() {
    let invitationComponents = [];
    _.each(this.props.invitations, (invitation) => {
      invitationComponents.push(
        <Tr key={invitation.id}>
          <Td column="email">
            {invitation.email}
          </Td>
          <Td column="privilege">
            {_.capitalize(invitation.privilege)}
          </Td>
          <Td column="precinct">
            {this.invitationPrecinctLink(invitation)}
          </Td>
          <Td column="resend">
            <Link to='#' data-id={invitation.id} onClick={ (e) => this.resend(e) }>Resend</Link>
          </Td>
        </Tr>
      );
    });

    return (
      <Loader loaded={this.props.fetched}>
        <div className="table-responsive">
          <Table className="table table-striped" itemsPerPage={50} filterable={['email']} noDataText='No invitations found.'>
            <Thead>
              <Th column="email">
                <strong>Email</strong>
              </Th>
              <Th column="privilege">
                <strong>Privilege</strong>
              </Th>
              <Th column="precinct">
                <strong>Precinct</strong>
              </Th>
              <Th column="resend">
                <strong>Resend</strong>
              </Th>
            </Thead>
            {invitationComponents}
          </Table>
        </div>
      </Loader>
    );
  }
}

export default InvitationsTable;
