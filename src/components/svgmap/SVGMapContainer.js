import React from 'react';
import SVGMap from 'components/SVGMap/SVGMap';

export class SVGMapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counties:[
        {
          name:'Pike',
          precincts:['4','5','6']
        },
        {
          name:'Polk',
          precincts:['1','2','3']
        },
        {
          name:'Pulaski',
          precincts:['7','8']
        }
      ]
    };
  }
  render() {
    return <SVGMap pieces={this.state.counties} />;
  }
}

export default SVGMapContainer;
