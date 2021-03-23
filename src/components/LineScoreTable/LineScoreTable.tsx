interface iLineScoreTableProps {
	awayNickname: string,
	homeNickname: string
	awayScores: string[],
	homeScores: string[]
}

export default function InningsTable({ awayNickname, homeNickname, awayScores, homeScores}: iLineScoreTableProps) {

	function runTotal(arr: string[]) {
		const total = arr.reduce((acc, v, i) => {
			return acc + parseInt(v);
		}, 0);
		return <th className="run-total">{total}</th>;
	}
	
	function inningScores (arr: string[]) {
		return arr.map((inning, i) => {
			return <td key={i}>{inning}</td>;
		});
	}

	const table = 		
		<table className="table is-narrow is-fullwidth line-score">
			<tbody>
				<tr className="away-team-line-score">
					<th>{awayNickname}</th>
					{inningScores(awayScores)}
					{runTotal(awayScores)}
				</tr>
				<tr className="home-team-line-score">
					<th>{homeNickname}</th>
					{inningScores(homeScores)}
					{runTotal(homeScores)}
				</tr>
			</tbody>
		</table>

	return table;
}
