import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { Row, Col }           from 'react-bootstrap';
import sessionActions         from 'actions/session';
import CaptainNav             from 'components/nav/CaptainNav';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  sessionActions : bindActionCreators(sessionActions, dispatch)
});

export class CaptainLayout extends React.Component {
    static propTypes = {
      children: React.PropTypes.element
    }

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
          <CaptainNav signOut={ (e) => this.signOut(e) } {...this.props} />
          <Row className='content'>
            <Col md={6} mdOffset={3} sm={12} smOffset={0}>
              { this.props.children }
            </Col>
          </Row>
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CaptainLayout);
