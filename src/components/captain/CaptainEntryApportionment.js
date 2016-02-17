import React                  from 'react';
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
          if(confirm('Are you sure you want to finalize these delegate apportionment supporter counts? This action cannot be undone.')) {
            this.props.captainActions.updateApportionmentCounts({
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let countTitle = 'SECOND';
    if(this.props.extra) {
      countTitle = 'EXTRA';
    }

    return (
      <div>
        <h4>{countTitle} COUNT (determining delegates won)</h4>
        <p><strong>After realignment is over</strong>, enter the final number of supporters for each candidate. When you're done, click submit.</p>

        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='number' label='Bernie Sanders supporters' name='sandersSupporters' required={true} value={this.props.supporters.sanders} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label='Hillary Clinton supporters' name='clintonSupporters' required={true} value={this.props.supporters.clinton} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label="Martin O'Malley supporters" name='omalleySupporters' required={true} value={this.props.supporters.omalley} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label="Uncommitted supporters" name='uncommittedSupporters' required={true} value={this.props.supporters.uncommitted} onChange={ (e) => this.onUpdate(e) } />

          <ButtonInput type='submit' bsStyle='primary' value='Submit Final Count' />
        </form>
      </div>
    );
  }
};

export default CaptainEntryApportionment;
