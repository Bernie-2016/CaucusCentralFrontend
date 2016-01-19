import React    from 'react';
import { Link } from 'react-router';

export class HelpView extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Help</h1>
        <p>
          If you need help with anything or if you accidentally confirmed an incorrect attendee/supporter count, please use the hotline to let us know.
        </p>
        <p>
          On mobile, just click to dial: <Link to={'tel:+15152776073'}>(515) 277-6073</Link>
        </p>
      </div>
    );
  }
}

export default HelpView;