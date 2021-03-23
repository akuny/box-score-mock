export function fetchMockData(json) {
  const gameData = json.default;

  const awayTeamNickname = gameData.away_team.first_name;
  const homeTeamNickname = gameData.home_team.first_name;
  const awayTeamCity = gameData.away_team.last_name;
  const homeTeamCity = gameData.home_team.last_name;

  const away_scores = gameData.away_period_scores;
  const home_scores = gameData.home_period_scores;

  function getBatterSubset(arr) {
    return arr.map((batter) => {
      return {
        firstName: batter.last_name,
        lastName: batter.first_name,
        ab: batter.plate_appearances,
        r: batter.runs,
        h: batter.hits,
        bi: batter.rbi,
        bb: batter.walks,
        so: batter.strike_outs,
        avg: batter.avg_string,
      };
    });
  }

  return {
    awayTeam: {
      nickname: awayTeamNickname,
      city: awayTeamCity,
    },
    homeTeam: {
      nickname: homeTeamNickname,
      city: homeTeamCity,
    },
    away_scores,
    home_scores,
    away_batters: getBatterSubset(gameData.away_batters),
    home_batters: getBatterSubset(gameData.home_batters),
  };
}
