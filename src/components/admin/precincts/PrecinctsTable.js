import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
require('fixed-data-table/dist/fixed-data-table.min.css');

export class PrecinctsTable extends React.Component {

  constructor (props) {
    super(props);
  }

  getDelegateCountsFor (candidateName, precinct) {
    let counts = {
      supporters:'N/A',
      won:'N/A'
    };
    const candidates = precinct.delegate_counts;

    if (precinct.phase === 'apportioned' || precinct.phase === 'apportionment') {
      for (let i = 0, len = candidates.length; i < len; i++) {
        if (candidates[i].key === candidateName) {
          const candidate = candidates[i];
          counts = {
            supporters: candidate.supporters,
            won: candidate.delegates_won
          };
        }
      }
    }
    return counts;
  }

  phaseText(precinctStatus) {
    let text = '';
    switch (precinctStatus) {
    case 'start':
      text = 'Ready to Begin';
      break;
    case 'viability':
      text = 'Viability Phase';
      break;
    case 'not_viable':
      text = 'Not Viable';
      break;
    case 'apportionment':
      text = 'Apportionment Phase';
      break;
    case 'apportioned':
      text = 'Caucus completed';
      break;
    default:
      text = 'Invalid precinct state';
    }
    return text;
  }

  render () {
    const precincts = this.props.adminState.state.precincts;
    const headerHeight = 30;
    const rowHeight = 30;
    const tableWidth = 1125;
    const tableHeight = (precincts.length * rowHeight) + (headerHeight + 3);

    return (
      <Table
        rowsCount={precincts.length}
        rowHeight={rowHeight}
        headerHeight={headerHeight}
        width={tableWidth}
        height={tableHeight}>
        <Column
          header={<Cell>County</Cell>}
          cell={props => (
            <Cell {...props}>{precincts[props.rowIndex].county}</Cell>
          )}
          width={125}
        />
        <Column
          header={<Cell>Precinct</Cell>}
          cell={props => (
            <Cell {...props}>
              {precincts[props.rowIndex].name}
            </Cell>
          )}
          width={250}
        />
        <Column
          header={<Cell>Phase</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.phaseText(precincts[props.rowIndex].phase)}
            </Cell>
          )}
          width={150}
        />
        <Column
          header={<Cell>Attendees</Cell>}
          cell={props => (
            <Cell {...props}>
              {precincts[props.rowIndex].total_attendees}
            </Cell>
          )}
          width={100}
        />
        <Column
          header={<Cell>Bernie</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.getDelegateCountsFor('sanders', precincts[props.rowIndex]).supporters}
            </Cell>
          )}
          width={100}
        />
        <Column
          header={<Cell>Hillary</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.getDelegateCountsFor('clinton', precincts[props.rowIndex]).supporters}
            </Cell>
          )}
          width={100}
        />
        <Column
          header={<Cell>O'Malley</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.getDelegateCountsFor('omalley', precincts[props.rowIndex]).supporters}
            </Cell>
          )}
          width={100}
        />
        <Column
          header={<Cell>Delegates</Cell>}
          cell={props => (
            <Cell {...props}>
              {precincts[props.rowIndex].total_delegates}
            </Cell>
          )}
          width={100}
        />
        <Column
          header={<Cell>Awarded</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.getDelegateCountsFor('sanders', precincts[props.rowIndex]).won}
            </Cell>
          )}
          width={100}
        />
      </Table>);
  }
}

export default PrecinctsTable;
