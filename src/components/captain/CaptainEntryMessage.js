import React from 'react';

export class CaptainEntryMessage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <p>{this.props.message}</p>
    );
  }
};

export default CaptainEntryMessage;
