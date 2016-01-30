import React    from 'react';
import { Link } from 'react-router';

export default class HomeView extends React.Component {
  render () {
    return (
      <div className='text-center'>
        <h1>Caucus Central</h1>
        <p>
          The official Bernie 2016 app to collect live data from caucus precincts.
        </p>
        <hr />
        <p>
          <Link to='/report' className='btn btn-primary btn-block btn-lg'>Submit Volunteer Report</Link>
        </p>
        <p>
          <strong>Any supporter</strong>  can submit a volunteer report, to help everyone get up-to-the-minute results.
        </p>
        <hr />
        <p>
          <Link to='/signin' className='btn btn-primary btn-block btn-lg'>Captain Login</Link>
        </p>
        <p>
          <strong>Designated precinct captains</strong> should login to officially report on totals.
        </p>
      </div>
    );
  }
}
