import React                 from 'react';
import { Link }              from 'react-router';
import {Table, Column, Cell} from 'fixed-data-table';
import { phaseText }         from 'utils/phaseText';
import _                     from 'lodash';
import 'fixed-data-table/dist/fixed-data-table.min.css';

class LinkCell extends React.Component {
  render() {
    const { rowIndex, field, linkField, data, code, ...props } = this.props;
    const link = '/admin/states/' + code + '/precincts/' + data[rowIndex][linkField];
    return (
      <Cell {...props}>
        <Link to={link}>
          {data[rowIndex][field]}
        </Link>
      </Cell>
    );
  }
}

export class PrecinctsTable extends React.Component {
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

  onUpdate(e) {
    this.props.adminActions.setPrecinctsAttr({
      key: e.target.name,
      value: e.target.value
    });
  }

  render () {
    const keyword = _.lowerCase(this.props.keyword);
    let precincts = this.props.precincts;
    if(keyword !== '') {
      precincts = _.filter(precincts, (precinct) => {
        return _.lowerCase(precinct.name).indexOf(keyword) !== -1 || _.lowerCase(precinct.county).indexOf(keyword) !== -1;
      });
    }
    const { code } = this.props.params;
    const headerHeight = 30;
    const rowHeight = 30;
    const tableWidth = 1125;
    const tableHeight = (precincts.length * rowHeight) + (headerHeight + 3);

    return (
      <div>
        <p>
          <input type="text" name="keyword" placeholder="Keyword" value={this.props.keyword} onChange={ (e) => this.onUpdate(e) } />
        </p>
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
            cell={
              <LinkCell
                data={precincts}
                field='name'
                linkField='id'
                code={code}
              />
            }
            width={250}
          />
          <Column
            header={<Cell>Phase</Cell>}
            cell={props => (
              <Cell {...props}>
                {phaseText(precincts[props.rowIndex].phase)}
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
        </Table>
      </div>
    );
  }
}

export default PrecinctsTable;
