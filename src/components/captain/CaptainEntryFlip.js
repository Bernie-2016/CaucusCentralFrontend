import React                  from 'react';
import { Link }               from 'react-router';
import { Input, ButtonInput } from 'react-bootstrap';

export class CaptainEntryFlip extends React.Component {
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

  onUpdate(e) {
    this.props.captainActions.setAttr({
      key: e.target.name, 
      value: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    
    if(this.props.flipWinner == '' || this.props.flipWinner == 'none') {
      alert('Please select the flip winner.');
    }
    else if(confirm('Are you sure you want to report the flip winner? This action cannot be undone.')) {
      this.props.captainActions.updateFlipWinner({
        id: this.props.precinctId,
        token: this.props.sessionToken,
        flipWinner: this.props.flipWinner
      });
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  candidateName(candidate) {
    switch(candidate) {
      case 'sanders':
        return 'Bernie Sanders';
      case 'clinton':
        return 'Hillary Clinton';
      case 'omalley':
        return "Martin O'Malley";
      case 'uncommitted':
        return 'Uncommitted';
    }
  }

  render() {
    let flipContenders = [<option key={'none'} value='none'>Select flip winner...</option>];
    _.forOwn(this.props.supporters, (supporters, candidate) => {
      if((supporters / this.props.attendees % 1) == 0.5) {
        flipContenders.push(<option key={candidate} value={candidate}>{this.candidateName(candidate)}</option>);
      }
    });

    return (
      <div>
        <h4>Coin Flip</h4>
        <p>
          It looks like two candidates are tied for a delegate at this point -- if the alignment is finished, select the winner of the official coin flip to be awarded the delegate.
        </p>
        <p>
          Was there an extra alignment? You can report it <Link to='#' onClick={ (e) => this.thirdCount(e) }>here</Link>.
        </p>

        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='select' label='Flip Winner' name='flipWinner' value={this.props.flipWinner} onChange={ (e) => this.onUpdate(e) }>
            {flipContenders}
          </Input>

          <ButtonInput type='submit' bsStyle='primary' value='Submit Flip Winner' />
        </form>
      </div>
    );
  }
};

export default CaptainEntryFlip;
