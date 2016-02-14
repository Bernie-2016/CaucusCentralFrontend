import React    from 'react';
import { Link } from 'react-router';

export class CaptainEntryCompleted extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  thirdCount(e) {
    e.preventDefault();
    this.props.captainActions.setAttr({
      key: 'extra', 
      value: true
    });
    this.props.captainActions.setAttr({
      key: 'phase', 
      value: 'apportionment'
    });
  }

  render() {
    return (
      <div>
        <p>Caucus has been completed. Thanks for your help!</p>

        <p>Based on the data you entered, this is how delegates will be assigned:</p>

        <table className="table">
          <thead>
            <tr>
              <th>Bernie Sanders</th>
              <th>Hillary Clinton</th>
              <th>Martin O'Malley</th>
              <th>Uncommitted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ this.props.delegateCounts.sanders || 'Not Viable' }</td>
              <td>{ this.props.delegateCounts.clinton || 'Not Viable' }</td>
              <td>{ this.props.delegateCounts.omalley || 'Not Viable' }</td>
              <td>{ this.props.delegateCounts.uncommitted || 'Not Viable' }</td>
            </tr>
          </tbody>
        </table>
        <p>
          If these counts differ from the final delegate counts announced at the caucus, please simply contact our help line or email address and we will verify/take care of it. Make sure to mention your precinct name as listed above.
        </p>
        <p>
          Reporting hotline (if you reported incorrect results or are having issues with the app): <Link to='tel:+7027787414'>(702) 778-7414</Link>
        </p>
        <p>
          Reporting email: <Link to='mailto:Nevada-Reports@berniesanders.com'>Nevada-Reports@berniesanders.com</Link>
        </p>
        <p>
          Was there an extra alignment? You can report it <Link to='#' onClick={ (e) => this.thirdCount(e) }>here</Link>.
        </p>
      </div>
    );
  }
};

export default CaptainEntryCompleted;
