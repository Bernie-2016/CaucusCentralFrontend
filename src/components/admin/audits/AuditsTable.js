import React                        from 'react';
import { Link }                     from 'react-router';
import Loader                       from 'react-loader';
import { Table, Thead, Th, Tr, Td } from 'reactable';
import _                            from 'lodash';

export class AuditsTable extends React.Component {
  auditPrecinctLink(audit) {
    return (
      <Link to={'/admin/states/' + audit.precinct_state + '/precincts/' + audit.precinct_id}>
        {audit.precinct_name}
      </Link>
    );
  }

  closeAudit(e) {
    e.preventDefault();
    const auditId = e.target.getAttribute('data-id');
    if(confirm('Are you sure you want to close out this audit?')) {
      this.props.adminActions.updateAudit({
        token: this.props.sessionToken,
        id: auditId,
        audit: {
          status: 'closed'
        }
      });
    }
  }

  render() {
    let auditComponents = [];
    _.each(this.props.audits, (audit) => {
      let officialResults = 'N/A';
      if(audit.audit_type === 'delegate_mismatch') {
        officialResults = (
          <p>
            BS: {(audit.official_results || {}).sanders}, 
            HC: {(audit.official_results || {}).clinton}, 
            MOM: {(audit.official_results || {}).omalley}, 
            U: {(audit.official_results || {}).uncommitted}
          </p>
        );
      }
      let auditType = '';
      if(audit.audit_type == 'delegate_mismatch') {
        auditType = 'Delegate Mismatch';
      }
      else {
        auditType = 'Miscalculation';
      }

      auditComponents.push(
        <Tr key={audit.id}>
          <Td column="county">
            {audit.precinct_county}
          </Td>
          <Td column="precinct">
            {this.auditPrecinctLink(audit)}
          </Td>
          <Td column="auditType">
            {auditType}
          </Td>
          <Td column="supporterCounts">
            <p>
              BS: {audit.supporter_counts.sanders}, 
              HC: {audit.supporter_counts.clinton}, 
              MOM: {audit.supporter_counts.omalley}, 
              U: {audit.supporter_counts.uncommitted}
            </p>
          </Td>
          <Td column="reportedResults">
            <p>
              BS: {audit.reported_results.sanders}, 
              HC: {audit.reported_results.clinton}, 
              MOM: {audit.reported_results.omalley}, 
              U: {audit.reported_results.uncommitted}
            </p>
          </Td>
          <Td column="officialResults">
            {officialResults}
          </Td>
          <Td column="close">
            <Link to='#' data-id={audit.id} onClick={ (e) => this.closeAudit(e) }>Close</Link>
          </Td>
        </Tr>
      );
    });

    return (
      <Loader loaded={this.props.fetched}>
        <div className="table-responsive">
          <Table className="table table-striped" itemsPerPage={50} noDataText='No audits found.'>
            <Thead>
              <Th column="county">
                <strong>County</strong>
              </Th>
              <Th column="precinct">
                <strong>Precinct</strong>
              </Th>
              <Th column="auditType">
                <strong>Type</strong>
              </Th>
              <Th column="supporterCounts">
                <strong>Supporter Counts</strong>
              </Th>
              <Th column="reportedResults">
                <strong>Reported Delegates</strong>
              </Th>
              <Th column="officialResults">
                <strong>Official Delegates</strong>
              </Th>
              <Th column="close">
                <strong>Close</strong>
              </Th>
            </Thead>
            {auditComponents}
          </Table>
        </div>
      </Loader>
    );
  }
}

export default AuditsTable;
