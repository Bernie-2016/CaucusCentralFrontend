import React                  from 'react';
import { Input, ButtonInput } from 'react-bootstrap';

export class CaptainEntryViability extends React.Component {
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
    let delegateCounts = [];
    let total = 0;
    let valid = true;
    let msg = '';

    // Create delegate hash and check validity along the way
    _.forOwn(this.props.supporters, (supporters, candidate) => {
      if(isNaN(supporters)) {
        msg = 'Supporter counts must be a valid number.';
        valid = false;
      }

      total += parseInt(supporters);
      if(total > this.props.attendees) {
        msg = 'Supporter counts cannot total more than ' + this.props.attendees + ' (the total number of attendees).';
        valid = false;
      }

      delegateCounts.push({
        key: candidate,
        supporters: supporters
      });

      if(delegateCounts.length === Object.keys(this.props.supporters).length) {
        if(valid) {
          if(confirm('Are you sure you want to finalize these viability supporter counts? This action cannot be undone.')) {
            this.props.captainActions.updateViabilityCounts({
              id: this.props.precinctId,
              token: this.props.sessionToken,
              delegate_counts: delegateCounts
            });
          }
        }
        else {
          alert(msg);
        }
      }
    });
  }

  alertClass() {
    if(this.props.supporters.sanders >= this.props.threshold) {
      return 'alert alert-success';
    }
    else {
      return 'alert alert-danger';
    }
  }

  render() {
    return (
      <div>
        <h4>FIRST COUNT (determining viability)</h4>
        <p>Enter the supporters for each candidate once the first count is announced. When you're done, click submit. (NOTE: You'll still need to submit a final count in the next step!)</p>

        <div className={this.alertClass()}>
          Based on current inputs, Bernie has <strong>{this.props.supporters.sanders} supporters</strong> and needs <strong>{this.props.threshold} supporters</strong> to be viable.
        </div>

        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='number' label='Bernie Sanders supporters' name='sandersSupporters' required={true} value={this.props.supporters.sanders} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label='Hillary Clinton supporters' name='clintonSupporters' required={true} value={this.props.supporters.clinton} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label="Martin O'Malley supporters" name='omalleySupporters' required={true} value={this.props.supporters.omalley} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label="Uncommitted supporters" name='uncommittedSupporters' required={true} value={this.props.supporters.uncommitted} onChange={ (e) => this.onUpdate(e) } />

          <ButtonInput type='submit' bsStyle='primary' value='Submit First Count' />
        </form>
      </div>
    );
  }
};

export default CaptainEntryViability;
