const teamLogos = {
    'Chicago Cubs': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chc.png',
    'St. Louis Cardinals': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/stl.png',
    'Arizona Diamondbacks': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/ari.png',
    'New York Mets': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nym.png',
    'Tampa Bay Rays': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tb.png',
    'Chicago White Sox': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chw.png',
    'Cincinnati Reds': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cin.png',
    'Milwaukee Brewers': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mil.png',
    'Pittsburgh Pirates': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/pit.png',
    'Kansas City Royals': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/kc.png',
    'Minnesota Twins': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/min.png',
    'Detroit Tigers': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/det.png',
    'Cleveland Guardians': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cle.png',
    'Boston Red Sox': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bos.png',
    'New York Yankees': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nyy.png',
    'Baltimore Orioles': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bal.png',
    'Toronto Blue Jays': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tor.png',
    'Washington Nationals': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/wsh.png',
    'Miami Marlins': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mia.png',
    'Philadelphia Phillies': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/phi.png',
    'Atlanta Braves': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/atl.png',
    'San Francisco Giants': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sf.png',
    'Los Angeles Dodgers': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/lad.png',
    'Colorado Rockies': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/col.png',
    'San Diego Padres': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sd.png',
    'Texas Rangers': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tex.png',
    'Seattle Mariners': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sea.png',
    'Oakland Athletics': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/oak.png',
    'Houston Astros': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/hou.png',
    'Los Angeles Angels': 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/laa.png'
}

function renderGames (game) {
    const gameCard = document.createElement('div')
    gameCard.className = 'game-card'
    const cardTitle = document.createElement('h2')
    let awayTeam = document.createElement('h4')
    awayTeam = game.teams.away.team.name
    let homeTeam = document.createElement('h4')
    homeTeam = game.teams.home.team.name
    cardTitle.innerText = `${awayTeam} vs ${homeTeam}`
    let awayTeamWins = game.teams.away.leagueRecord.wins
    let awayTeamLosses = game.teams.away.leagueRecord.losses
    let awayTeamRecord = document.createElement('p')
    awayTeamRecord = `W-L: ${awayTeamWins}-${awayTeamLosses}`
    let homeTeamWins = game.teams.home.leagueRecord.wins
    let homeTeamLosses = game.teams.home.leagueRecord.losses
    let homeTeamRecord = document.createElement('p')
    homeTeamRecord = `W-L: ${homeTeamWins}-${homeTeamLosses}`
    const awayLogo = document.createElement('img')
    awayLogo.className = 'logos'
    const homeLogo = document.createElement('img')
    homeLogo.className = 'logos'
    const whoWillWin = document.createElement('h3')
    whoWillWin.className = 'who-wins'
    whoWillWin.innerText = 'Who do you think will win? Vote below!'
    const awayWinBtn = document.createElement('button')
    awayWinBtn.innerText = `${awayTeam} win!`
    awayWinBtn.className = 'buttons'
    let awayVotes = document.createElement('p')
    awayVotes.className = 'votes'
    let awayVotesNumb = 0
    awayVotes.innerText = `${awayVotesNumb} votes`
    awayWinBtn.addEventListener('click', () => {
        awayVotesNumb++
        awayVotes.innerText = `${awayVotesNumb} votes`
    })
    const homeWinBtn = document.createElement('button')
    homeWinBtn.innerText = `${homeTeam} win!`
    homeWinBtn.className = 'buttons'
    let homeVotes = document.createElement('p')
    homeVotes.className = 'votes'
    let homeVotesNumb = 0
    homeVotes.innerText = `${homeVotesNumb} votes`
    homeWinBtn.addEventListener('click', () => {
        homeVotesNumb++
        homeVotes.innerText = `${homeVotesNumb} votes`
    })
    awayLogo.src = teamLogos[awayTeam]
    homeLogo.src = teamLogos[homeTeam]
    gameCard.append(cardTitle, awayLogo, awayTeamRecord, homeLogo, homeTeamRecord, whoWillWin, awayWinBtn, awayVotes, homeWinBtn, homeVotes)
    gamesCollection.appendChild(gameCard)
}

function getGames () {
    fetch('http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1')
    .then(res => res.json())
    .then(games => {
        games.dates[0].games.forEach(function (game) {
            //console.log('game',game),
            renderGames(game)
        })
    })
}

getGames();

const gamesCollection = document.getElementById('games-collection')