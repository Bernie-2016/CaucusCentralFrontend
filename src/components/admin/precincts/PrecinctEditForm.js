import React         from 'react';
import { phaseText } from 'utils/phaseText';

export class PrecinctEditForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Precinct name</label>
          <input type="text" className="form-control" name="name" value={this.props.name} onChange={this.props.onUpdate} />
        </div>

        <div className="form-group">
          <label htmlFor="county">County</label>
          <input type="text" className="form-control" name="county" value={this.props.county} onChange={this.props.onUpdate} />
        </div>

        <div className="form-group">
          <label htmlFor="phase">Phase</label>
          <select className="form-control" name="phase" value={this.props.phase} onChange={this.props.onUpdate}>
            <option value="start" key="start">{phaseText('start')}</option>
            <option value="viability" key="viability">{phaseText('viability')}</option>
            <option value="not_viable" key="not_viable">{phaseText('not_viable')}</option>
            <option value="apportionment" key="apportionment">{phaseText('apportionment')}</option>
            <option value="apportioned" key="apportioned">{phaseText('apportioned')}</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="delegates">Total delegates</label>
          <input type="number" className="form-control" name="delegates" value={this.props.delegates} onChange={this.props.onUpdate} />
        </div>

        <div className="form-group">
          <label htmlFor="attendees">Total attendees</label>
          <input type="number" className="form-control" name="attendees" value={this.props.attendees} onChange={this.props.onUpdate} />
        </div>

        <div className="form-group">
          <label htmlFor="bernieSupporters">Bernie Sanders Supporters</label>
          <input type="number" className="form-control" name="bernieSupporters" value={this.props.bernieSupporters} onChange={this.props.onUpdate} />
        </div>

        <div className="form-group">
          <label htmlFor="hillarySupporters">Hillary Clinton Supporters</label>
          <input type="number" className="form-control" name="hillarySupporters" value={this.props.hillarySupporters} onChange={this.props.onUpdate} />
        </div>

        <div className="form-group">
          <label htmlFor="martinSupporters">Martin O'Malley Supporters</label>
          <input type="number" className="form-control" name="martinSupporters" value={this.props.martinSupporters} onChange={this.props.onUpdate} />
        </div>

        <button type="submit" className="btn btn-primary">Update Precinct</button>
      </form>
    );
  }
}

export default PrecinctEditForm;