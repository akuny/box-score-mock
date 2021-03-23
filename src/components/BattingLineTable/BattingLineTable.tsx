import { iBatter } from '../BoxScore';

interface iBatterLineTableProps {
  batters: iBatter[],
  team: string,
  isHomeTeam: boolean
}

export default function BattingLineTable({ batters, team, isHomeTeam } : iBatterLineTableProps) {

  const batterRows = batters.map((batter, i) => {
    return (
      <tr key={i}>
        <td>{batter.lastName}, {batter.firstName.slice(0, 1)}.</td>
        <td>{batter.ab}</td>
        <td>{batter.r}</td>
        <td>{batter.h}</td>
        <td>{batter.bi}</td>
        <td>{batter.bb}</td>
        <td>{batter.so}</td>
        <td>{batter.avg}</td>
      </tr>
    );
  });

  const totalsRow = ['ab', 'r', 'h', 'bi', 'bb', 'so'].map((stat, i) => {

    const statTotal = batters.reduce((sum, batter) => {
      return sum + parseInt(batter[stat]) || 0;
    }, 0);

    return <th key={i}>{statTotal.toString()}</th>
  });

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>{team}</th>
          <th>ab</th>
          <th>r</th>
          <th>h</th>
          <th>bi</th>
          <th>bb</th>
          <th>so</th>
          <th>avg.</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Totals</th>
          {totalsRow}
          <th></th>
        </tr>
      </tfoot>
      <tbody>
        {batterRows}
      </tbody>
    </table>
  );
}
