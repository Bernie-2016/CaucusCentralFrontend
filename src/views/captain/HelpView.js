import React from 'react';

export class HelpView extends React.Component {
  render() {
    return (
      <div>
        <h1 className='text-center'>Help</h1>
        <p>
          If you need help with anything, please use the hotline to let us know.
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
}

export default HelpView;
