import React        from 'react';
import { Row, Col } from 'react-bootstrap';

export default class HomeLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return (
      <Row>
        <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={12} xsOffset={0}>
          <Row className='logo-row'>
            <img src='/images/logo.png' alt='Bernie 2016' />
          </Row>
          {this.props.children}
        </Col>
      </Row>
    );
  }
}
