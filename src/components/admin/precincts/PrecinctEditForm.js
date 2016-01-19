import React         from 'react';
import { phaseText } from 'utils/phaseText';

export class PrecinctEditForm extends React.Component {
  onUpdate(e) {
    this.props.adminActions.setPrecinctAttr({
      key: e.target.name, 
      value: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let { id } = this.props.params;
    this.props.adminActions.updatePrecinct({
      token: this.props.sessionToken,
      id: id,
      precinct: {
        name: this.props.name,
        county: this.props.county,
        phase: this.props.phase,
        total_attendees: this.props.attendees,
        total_delegates: this.props.delegates,
        delegate_counts: [
          {
            key: 'sanders',
            supporters: this.props.supporters.sanders
          },
          {
            key: 'clinton',
            supporters: this.props.supporters.clinton
          },
          {
            key: 'omalley',
            supporters: this.props.supporters.omalley
          }
        ]
      }
    });
  }

  render() {
    return (
      <form onSubmit={ (e) => this.onSubmit(e) } >
        <div className="form-group">
          <label htmlFor="name">Precinct name</label>
          <input type="text" className="form-control" name="name" value={this.props.name} onChange={ (e) => this.onUpdate(e) }  />
        </div>

        <div className="form-group">
          <label htmlFor="county">County</label>
          <input type="text" className="form-control" name="county" value={this.props.county} onChange={ (e) => this.onUpdate(e) }  />
        </div>

        <div className="form-group">
          <label htmlFor="phase">Phase</label>
          <select className="form-control" name="phase" value={this.props.phase} onChange={ (e) => this.onUpdate(e) } >
            <option value="start" key="start">{phaseText('start')}</option>
            <option value="viability" key="viability">{phaseText('viability')}</option>
            <option value="not_viable" key="not_viable">{phaseText('not_viable')}</option>
            <option value="apportionment" key="apportionment">{phaseText('apportionment')}</option>
            <option value="apportioned" key="apportioned">{phaseText('apportioned')}</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="delegates">Total delegates</label>
          <input type="number" className="form-control" name="delegates" value={this.props.delegates} onChange={ (e) => this.onUpdate(e) }  />
        </div>

        <div className="form-group">
          <label htmlFor="attendees">Total attendees</label>
          <input type="number" className="form-control" name="attendees" value={this.props.attendees} onChange={ (e) => this.onUpdate(e) }  />
        </div>

        <div className="form-group">
          <label htmlFor="bernieSupporters">Bernie Sanders Supporters</label>
          <input type="number" className="form-control" name="bernieSupporters" value={this.props.supporters.sanders} onChange={ (e) => this.onUpdate(e) }  />
        </div>

        <div className="form-group">
          <label htmlFor="hillarySupporters">Hillary Clinton Supporters</label>
          <input type="number" className="form-control" name="hillarySupporters" value={this.props.supporters.clinton} onChange={ (e) => this.onUpdate(e) }  />
        </div>

        <div className="form-group">
          <label htmlFor="martinSupporters">Martin O'Malley Supporters</label>
          <input type="number" className="form-control" name="martinSupporters" value={this.props.supporters.omalley} onChange={ (e) => this.onUpdate(e) }  />
        </div>

        <button type="submit" className="btn btn-primary">Update Precinct</button>
      </form>
    );
  }
}

export default PrecinctEditForm;
