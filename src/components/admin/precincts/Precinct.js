import React                        from 'react';
import { Link }                     from 'react-router';
import Loader                       from 'react-loader';
import { Table, Thead, Th, Tr, Td } from 'reactable';
import { phaseText }                from 'utils/phaseText';
import _                            from 'lodash';

export class Precinct extends React.Component {
  removeReport(e) {
    e.preventDefault();
    const reportId = e.target.getAttribute('data-id');
    let { id } = this.props.params;
    if(confirm('Are you sure you want to remove this report? This action cannot be undone.')) {
      this.props.reportActions.remove({
        token: this.props.sessionToken,
        id: reportId,
        precinctId: id
      });
    }
  }

  render() {
    let captain = null;

    if(this.props.captainId) {
      captain = <p key={"captain"}>Captain: <Link to={'/admin/users/' + this.props.captainId}>{this.props.captainName}</Link></p>;
    }

    let reportComponents = [];
    _.each(this.props.reports, (report) => {
      reportComponents.push(
        <Tr key={report.id}>
          <Td column="source">
            {_.capitalize(report.source)}
          </Td>
          <Td column="phase">
            {phaseText(report.phase)}
          </Td>
          <Td column="attendees">
            {report.attendees}
          </Td>
          <Td column="sandersSupporters">
            {report.sandersSupporters}
          </Td>
          <Td column="clintonSupporters">
            {report.clintonSupporters}
          </Td>
          <Td column="omalleySupporters">
            {report.omalleySupporters}
          </Td>
          <Td column="delegatesWon">
            {report.delegatesWon}
          </Td>
          <Td column="edit">
            <Link to={`${this.props.location.pathname}/reports/${report.id}`}>Edit</Link>
          </Td>
          <Td column="remove">
            <Link to='#' data-id={report.id} onClick={ (e) => this.removeReport(e) }>Remove</Link>
          </Td>
        </Tr>
      );
    });

    return (
      <Loader loaded={this.props.fetched}>
        <p className='back-link'>
          <Link to={'/admin/states/' + this.props.state}>&laquo; Back</Link>
        </p>
        <h3 className='text-center'>{this.props.name}</h3>
        <p className='text-center'>
          Precinct in {this.props.county}, {this.props.state}.
          <br />
          {this.props.delegates} delegates.
          <br />
          <Link to={'/admin/states/' + this.props.state + '/precincts/' + this.props.params.id + '/edit'}>Change precinct details.</Link>
        </p>
        <hr />
        {captain}

        <h3 className='text-center'>Submit new reports</h3>
        <p className='text-center'>
          Reports send data back to HQ. Submit them here, or have other volunteers submit them from
          the <Link to='http://caucuscentral.berniesanders.com/'>home page.</Link>
        </p>
        <Link to={this.props.location.pathname + '/report'} className='btn btn-primary btn-lg btn-block'>Add new report</Link>

        <hr />

        <h3 className='text-center'>Existing reports</h3>
        <div className='table-responsive'>
          <Table className="table table-striped" itemsPerPage={50}>
            <Thead>
              <Th column="source">
                <strong>Source</strong>
              </Th>
              <Th column="phase">
                <strong>Phase</strong>
              </Th>
              <Th column="attendees">
                <strong>Attendees</strong>
              </Th>
              <Th column="sandersSupporters">
                <strong>Sanders Supporters</strong>
              </Th>
              <Th column="clintonSupporters">
                <strong>Clinton Supporters</strong>
              </Th>
              <Th column="omalleySupporters">
                <strong>O'Malley Supporters</strong>
              </Th>
              <Th column="delegatesWon">
                <strong>Delegates Won</strong>
              </Th>
              <Th column="edit">
                <strong>Edit</strong>
              </Th>
              <Th column="remove">
                <strong>Remove</strong>
              </Th>
            </Thead>
            {reportComponents}
          </Table>
        </div>
      </Loader>
    );
  }
}

export default Precinct;
