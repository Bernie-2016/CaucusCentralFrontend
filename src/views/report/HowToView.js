import React    from 'react';
import { Link } from 'react-router';

export class HowToView extends React.Component {
  render() {
    return (
      <div>
        <Link to='#' onClick={this.props.history.goBack}>&laquo; Back to Report</Link>
        <h1 className='text-center'>How to Report</h1>
        <p>
          Thanks for helping us get real-time information about the caucus! Here's how to fill out the report form.
        </p>
        <p>
          First, you'll need to select the precinct you're in from the dropdown list - it's sorted alphabetically by county name and then precinct name.
        </p>
        <p>
          Next, you'll need to select the current caucus phase. There are four options here:
        </p>
        <ul>
          <li>
            <strong>Viability Phase</strong> (First Count): The caucus has just begun and the precinct chair has announced the total number of attendees; people are now aligning with their first-choice candidate. At this phase, you only need to report the total number of attendees.
          </li>
          <li>
            <strong>Not Viable</strong>: After the announcement of the first count, Bernie was not viable. If you report this option, please also include the supporter counts for each candidate just so we can double-check the math.
          </li>
          <li>
            <strong>Apportionment Phase</strong> (Second Count): After the first count, Bernie was viable! Supporters of any non-viable candidates are now realigning to their second-choice candidate. If you report this option, please include the supporter counts <strong>as of the first count</strong> so we can double-check who is and isn't viable.
          </li>
          <li>
            <strong>Caucus Completed</strong>: The second count has been completed and final supporter counts have been announced. Please fill in the supporter counts for each candidate so we can double-check the delegate math; leave the supporter counts for any non-viable candidates at 0.
          </li>
        </ul>
        <p>
          Regardless of caucus phase, you will be asked to enter the number of total attendees. This should always be the official number announced at the beginning of the caucus; we just have you re-enter it at each step in case it hasn't been reported yet and to double-check that it's accurate. As mentioned above, you will also be asked to enter the supporter counts for each candidate if not in the initial viability phase.
        </p>
        <p>
          You are encouraged to submit multiple reports! Please submit a report for each phase as the caucus progresses from initial alignment to first county to final count - this lets us track how the caucus is progressing.
        </p>
        <p>
          Thanks for your help and thanks for caucusing for Bernie!
        </p>
        <Link to='#' onClick={this.props.history.goBack} className='btn btn-primary btn-block btn-lg'>&laquo; Back to Report</Link>
      </div>
    );
  }
}

export default HowToView;
