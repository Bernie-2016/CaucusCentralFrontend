import React    from 'react';
import { Link } from 'react-router';

export default class HomeView extends React.Component {
  render () {
    return (
      <div className='text-center'>
        <h1>Caucus Central</h1>
        <p>
          Welcome to Caucus Central, the official campaign app to collect live data from caucus precincts. We designate precinct captains to officially report on totals from their precinct, and we also accept crowdsourced data from all Bernie supporters to get the most up-to-the-minute results.
        </p>
        <p>
          If you're a precinct captain, click "Captain Login" below to log in. If you're a supporter, click "Submit Report" to submit an anonymous report from your precinct.
        </p>
        <hr />
        <p>
          <Link to='/report' className='btn btn-primary btn-lg'>Submit Report</Link>
        </p>
        <p>
          <Link to='/signin' className='btn btn-primary btn-lg'>Captain Login</Link>
        </p>
      </div>
    );
  }
}
