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
              <td>{ this.props.delegateCounts.sanders }</td>
              <td>{ this.props.delegateCounts.clinton }</td>
              <td>{ this.props.delegateCounts.omalley }</td>
              <td>{ this.props.delegateCounts.uncommitted }</td>
            </tr>
          </tbody>
        </table>
        <p>
          Was there an extra alignment? You can report it <Link to='#' onClick={ (e) => this.thirdCount(e) }>here</Link>.
        </p>
      </div>
    );
  }
};

export default CaptainEntryCompleted;
