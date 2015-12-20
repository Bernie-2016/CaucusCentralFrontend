require('./svg-map.scss');
import React from 'react';
import Datamap  from 'Datamaps';

export class SVGMap extends React.Component {

  componentDidMount() {
    var map = new Datamap({
      element: document.querySelector('.svg-map'),
      height: 600,
      width: 800
    });
  }

  render() { 
    return <div className="svg-map"></div>
  }
}

export default SVGMap;
