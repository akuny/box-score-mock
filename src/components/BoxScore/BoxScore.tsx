import BoxScoreHeader from '../BoxScoreHeader';
import BattingLineTable from '../BattingLineTable';
//import PitchingLineTable from '../PitchingLineTable';
import LineScoreTable from '../LineScoreTable';

export interface iTeam {
	nickname: string,
	city: string,
	team_id?: string,
	abbreviation?: string,
	active?: boolean,
	conference?: string,
	division?: string,
	site_name?: string,
	state?: string,
	full_name?: string
}

export interface iBatter {
	[key: string]: any,
	firstName: string,
	lastName: string,
	ab: number,
	r: number,
	h: number,
	bi: number,
	bb: number,
	so: number,
	avg: string
}


export interface iBoxScoreProps {
	boxScore: {
		awayTeam: iTeam,
		homeTeam: iTeam,
		away_scores: string[],
		home_scores: string[],
		away_batters: iBatter[],
		home_batters: iBatter[]
	}
}

export function BoxScore({ boxScore }: iBoxScoreProps) {
	const { away_scores, home_scores, awayTeam, homeTeam, away_batters, home_batters } = boxScore;
	return (
		<div className="section py-2">
			<div className="columns">
				<div className="column">
					<BoxScoreHeader
						awayNickname={awayTeam.city}
						homeNickname={homeTeam.city}
						awayRunTotal={away_scores.reduce((num, v) => num + parseInt(v), 0)}
						homeRunTotal={home_scores.reduce((num, v) => num + parseInt(v), 0)}
					/>
					<LineScoreTable 
						awayNickname={awayTeam.city}
						homeNickname={homeTeam.city}
						awayScores={away_scores}
						homeScores={home_scores} 
					/>
					<BattingLineTable batters={away_batters} team={awayTeam.nickname} isHomeTeam={false} />
					<BattingLineTable batters={home_batters} team={homeTeam.nickname} isHomeTeam={true} />
				</div>
			</div>
		</div>
	);
}
