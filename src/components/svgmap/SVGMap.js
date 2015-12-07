import React from 'react';

export class SVGMap extends React.Component {
  render() { 
    return <ul className='list-unstyled'> {this.props.pieces.map(this.renderPiece)} </ul>;
  }
  renderPiece({name, precincts}) {
    return <li>
      <h2>{name}</h2>
      <p>Number of precincts: {precincts.length}</p>
    </li>;
  }
}

export default SVGMap;
