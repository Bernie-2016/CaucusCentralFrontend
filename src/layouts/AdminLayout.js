import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { Row, Col }           from 'react-bootstrap';
import * as sessionActions    from 'actions/session';
import AdminNav               from 'components/nav/AdminNav';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  sessionActions : bindActionCreators(sessionActions, dispatch)
});

export class AdminLayout extends React.Component {
  componentWillMount() {
    this.redirectToSigninIfLoggedOut();
  }

  componentDidUpdate() {
    this.redirectToSigninIfLoggedOut();
  }

  redirectToSigninIfLoggedOut () {
    if (this.props.session.id == undefined) {
      this.props.history.pushState(null, '/');
    }
  }

  signOut(e) {
    e.preventDefault();
    this.props.sessionActions.signOut({
      token: this.props.session.token
    });
  }

  render () {
    return (
      <div>
        <AdminNav signOut={ (e) => this.signOut(e) } {...this.props} />
        <Row className='content'>
          <Col md={12} mdOffset={0} sm={8} smOffset={2}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout);
