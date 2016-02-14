import React    from 'react';
import { Link } from 'react-router';

export class HelpView extends React.Component {
  render() {
    return (
      <div>
        <h1 className='text-center'>Help</h1>
        <p>
          If you need help with anything, please use the hotline to let us know.
        </p>
        <p>
          Official Troubleshooting and Legal hotline: <Link to='tel:+7029638333'>(702) 963-8333</Link>
        </p>
        <p>
          Reporting hotline (if you reported incorrect results or are having issues with the app): <Link to='tel:+7027787414'>(702) 778-7414</Link>
        </p>
        <p>
          Reporting email: <Link to='mailto:Nevada-Reports@berniesanders.com'>Nevada-Reports@berniesanders.com</Link>
        </p>
      </div>
    );
  }
}

export default HelpView;
