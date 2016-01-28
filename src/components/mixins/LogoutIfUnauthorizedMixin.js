let LogoutIfUnauthorizedMixin = {
  componentDidUpdate: function() {
    if(this.props.error && this.props.error.status === 403) {
      setTimeout(() => {
        this.props.sessionActions.signOut({
          token: this.props.sessionToken
        });
      })
    }
  }
};

module.exports = LogoutIfUnauthorizedMixin;
