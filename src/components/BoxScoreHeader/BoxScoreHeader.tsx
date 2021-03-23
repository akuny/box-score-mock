interface iBoxScoreHeaderProps {
	awayNickname: string,
	homeNickname: string
	awayRunTotal: number
	homeRunTotal: number
}

export default function BoxScoreHeader(props: iBoxScoreHeaderProps) {

	const { awayNickname, homeNickname, awayRunTotal, homeRunTotal } = props;

	const winningTeam = awayRunTotal > homeRunTotal 
		? `${awayNickname} ${awayRunTotal}`
		: `${homeNickname} ${homeRunTotal}`;
	const losingTeam = awayRunTotal < homeRunTotal 
		? `${awayNickname} ${awayRunTotal}`
		: `${homeNickname} ${homeRunTotal}`;
	

	return (
		<p className="is-size-5 pb-2 has-text-weight-bold">{winningTeam}, {losingTeam}</p>
	)
}
