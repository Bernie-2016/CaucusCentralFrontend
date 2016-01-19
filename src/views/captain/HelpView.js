import React    from 'react';
import { Link } from 'react-router';

export class HelpView extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Help</h1>
        <p>
          If you need help with anything, please use the hotline to let us know.
        </p>
        <p>
          On mobile, just click to dial: <Link to='tel:+15152776073'>(515) 277-6073</Link>
        </p>
        <p>
          If you accidentally confirmed an incorrect attendee or supporter count, please email 
          <Link to='mailto:iowa-help@berniesanders.com'>iowa-help@berniesanders.com</Link> with 
          your precinct name and the correct values.
        </p>
      </div>
    );
  }
}

export default HelpView;