import React                  from 'react';
import { Link }               from 'react-router';
import './Footer.scss';

export class Footer extends React.Component {
  render () {
    const svgString = "<svg width='200' height='40'><image xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='/images/billionaires.svg' width='200' height='40' x='0' /></svg>";

    return (
      <div className='footer-offset'>
        <footer>
          <p className='address'>Bernie 2016<br />PO Box 905<br />Burlington, VT 05402</p>
          <p className='site-title'>Paid for by Bernie 2016</p>
          <span className='billionaires'>
            <div dangerouslySetInnerHTML={{ __html: svgString }} />
            (not the billionaires)
          </span>
          <p><span className='copyright'>&copy; Bernie 2016</span> | <Link to='https://berniesanders.com/privacy-policy'>Privacy Policy</Link></p>
        </footer>
      </div>
    );
  }
}

export default Footer;
