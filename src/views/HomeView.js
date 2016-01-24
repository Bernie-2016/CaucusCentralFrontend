import React    from 'react';
import { Link } from 'react-router';

class HomeView extends React.Component {
  render () {
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-4 text-center'>
          <p>
            Welcome to Caucus Central, the official campaign app to collect live data from caucus precincts. We designate precinct captains to officially report on totals from their precinct, and we also accept crowdsourced data from all Bernie supporters to get the most up-to-the-minute results.
          </p>
          <p>
            If you're a precinct captain, click "Captain Login" below to log in. If you're just a supporter, click "Submit Report" to submit an anonymous report from your precinct.
          </p>
          <p>
            <Link to='/report' className='btn btn-primary'>Submit Report</Link>
          </p>
          <p>
            <Link to='/signin' className='btn btn-primary'>Captain Login</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default HomeView;
