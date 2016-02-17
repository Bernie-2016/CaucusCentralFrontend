import React                  from 'react';
import { Link }               from 'react-router';
import { Input, ButtonInput } from 'react-bootstrap';
import _                      from 'lodash';

export class CaptainEntryApportionment extends React.Component {
  onUpdate(e) {
    let val = e.target.value;
    if(val === '') {
      val = null;
    }
    else {
      val = parseInt(val);
    }
    this.props.captainActions.setAttr({
      key: e.target.name, 
      value: val
    });
  }

  onSubmit(e) {
    e.preventDefault();

    let total = 0;
    _.forOwn(this.props.wonCounts, (delegates) => {
      total += delegates;
    });
    
    if(total != this.props.delegates) {
      alert(`Total number of awarded delegates must equal ${this.props.delegates}, the number allotted to this precinct.`)
    }
    else if(confirm('Are you sure you want to finalize these awarded delegate counts? This action cannot be undone.')) {
      this.props.captainActions.updateFinalCounts({
        id: this.props.precinctId,
        token: this.props.sessionToken,
        results_counts: [
          {
            key: 'sanders',
            delegates: this.props.wonCounts.sanders
          },
          {
            key: 'clinton',
            delegates: this.props.wonCounts.clinton
          },
          {
            key: 'omalley',
            delegates: this.props.wonCounts.omalley
          },
          {
            key: 'uncommitted',
            delegates: this.props.wonCounts.uncommitted
          }
        ]
      });
    }
  }

  thirdCount(e) {
    e.preventDefault();
    this.props.captainActions.setAttr({
      key: 'extra', 
      value: true
    });
    this.props.captainActions.setAttr({
      key: 'phase', 
      value: 'apportionment'
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <h4>Final Delegates</h4>
        <p>
          When the caucus is complete, enter the final number of delegates awarded to each candidate.. When you're done, click submit.
        </p>
        <p>
          Was there an extra alignment before the final announcement? You can report it <Link to='#' onClick={ (e) => this.thirdCount(e) }>here</Link>.
        </p>
        <p>
          <strong>Total Delegates:</strong> {this.props.delegates}
        </p>

        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='number' label='Bernie Sanders delegates awarded' name='sandersWon' required={true} value={this.props.wonCounts.sanders} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label='Hillary Clinton delegates awarded' name='clintonWon' required={true} value={this.props.wonCounts.clinton} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label="Martin O'Malley delegates awarded" name='omalleyWon' required={true} value={this.props.wonCounts.omalley} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label="Uncommitted delegates awarded" name='uncommittedWon' required={true} value={this.props.wonCounts.uncommitted} onChange={ (e) => this.onUpdate(e) } />

          <ButtonInput type='submit' bsStyle='primary' value='Submit Awarded Delegates' />
        </form>
      </div>
    );
  }
};

export default CaptainEntryApportionment;
