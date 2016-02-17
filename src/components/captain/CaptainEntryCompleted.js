import React from 'react';

export class CaptainEntryCompleted extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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
          If anything unusual happened at the caucus or if you have a concern, please simply contact our help line or email address and we will take care of it. Make sure to mention your precinct name as listed above.
        </p>
        <p>
          Official Troubleshooting and Legal hotline: <a href='tel:+7029638333'>(702) 963-8333</a>
        </p>
        <p>
          Reporting hotline (if you reported incorrect results or are having issues with the app): <a href='tel:+7027787414'>(702) 778-7414</a>
        </p>
        <p>
          Reporting email: <a href='mailto:Nevada-Reports@berniesanders.com'>Nevada-Reports@berniesanders.com</a>
        </p>
      </div>
    );
  }
};

export default CaptainEntryCompleted;
