import React    from 'react';
import { Link } from 'react-router';

export class HowToView extends React.Component {
  render() {
    return (
      <div>
        <h1 className='text-center'>How to Report</h1>
        <p>
          Thanks for helping us get real-time information about the caucus! There are three types of reports you can send:
        </p>
        <ul>
          <li>
            <strong>Total Attendees</strong>: The caucus has just begun and the precinct chair has announced the total number of attendees; people are now aligning with their first-choice candidate. For this report, you only need to report the total number of attendees.
          </li>
          <li>
            <strong>First Count</strong> (Viability): The first alignment has completed and the precinct chair has announced the total number of supporters for each candidate. Please leave the total number of attendees from the beginning of the caucus.
          </li>
          <li>
            <strong>Second Count</strong> (Realignment/Caucus Complete): The second count has been completed and final supporter counts have been announced. Fill in the final number of supporters for each candidate. For any candidates that were eliminated after the first phase, simply leave their supporter count as 0. Also, please leave the total number of attendees from the beginning of the caucus.
          </li>
        </ul>
        <p>
          In very rare cases, caucuses may have more than two counts/alignments. If this happens in your precinct, you can use the "Second Count" report type to report any subseqent counts as well.
        </p>
        <p>
          You are encouraged to submit multiple reports! Please submit one report of each type as the caucus progresses from attendee count to first count to final count - this lets us track how the caucus is progressing.
        </p>
        <p>
          Thanks for your help and thanks for caucusing for Bernie!
        </p>
      </div>
    );
  }
}

export default HowToView;
