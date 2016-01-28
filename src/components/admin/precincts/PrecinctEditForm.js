import React         from 'react';
import Loader        from 'react-loader';
import { Link }      from 'react-router';

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
        name: this.props.precinct.name,
        county: this.props.precinct.county,
        total_delegates: this.props.precinct.delegates
      }
    });
  }

  render() {
    return (
      <Loader loaded={this.props.fetched}>
        <p className='back-link'>
          <Link to='#' onClick={this.props.history.goBack}>&laquo; Back</Link>
        </p>
        <form onSubmit={ (e) => this.onSubmit(e) } >
          <h3 className='text-center'>Edit {this.props.precinct.name}</h3>
          <p  className='text-center'>Precinct in county {this.props.precinct.county}.</p>
          <hr />
          <div className="form-group">
            <label htmlFor="name">Precinct name</label>
            <input type="text" className="form-control" name="name" value={this.props.precinct.name} onChange={ (e) => this.onUpdate(e) }  />
          </div>

          <div className="form-group">
            <label htmlFor="county">County</label>
            <input type="text" className="form-control" name="county" value={this.props.precinct.county} onChange={ (e) => this.onUpdate(e) }  />
          </div>

          <div className="form-group">
            <label htmlFor="delegates">Total delegates</label>
            <input type="number" className="form-control" name="delegates" value={this.props.precinct.delegates} onChange={ (e) => this.onUpdate(e) }  />
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block">Update Precinct</button>
        </form>
      </Loader>
    );
  }
}

export default PrecinctEditForm;
