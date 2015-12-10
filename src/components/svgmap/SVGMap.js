import React from 'react';

export class SVGMap extends React.Component {
  render() { 
    return <ul className='list-unstyled'> {this.props.pieces.map(this.renderPiece)} </ul>;
  }
  renderPiece(piece) {
    return <li key={piece.id}>
      <h2>{piece.name}</h2>
      <p>Number of precincts: {piece.precincts.length}</p>
    </li>;
  }
}

export default SVGMap;
