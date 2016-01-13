import React from 'react';

export class CaptainEntryMessage extends React.Component {
  render() {
    return (
      <p>{this.props.message}</p>
    );
  }
};

export default CaptainEntryMessage;
