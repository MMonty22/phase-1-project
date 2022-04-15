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
    switch (awayTeam) {
        case 'Chicago Cubs':
            awayLogo.src = cubsLogo
            break;
        case 'St. Louis Cardinals':
            awayLogo.src = cardinalsLogo
            break;
        case 'Cincinnati Reds':
            awayLogo.src = redsLogo
            break;
        case 'Milwaukee Brewers':
            awayLogo.src = brewersLogo
            break;
        case 'Pittsburgh Pirates':
            awayLogo.src = piratesLogo
            break;
        case 'Kansas City Royals':
            awayLogo.src = royalsLogo
            break;
        case 'Chicago White Sox':
            awayLogo.src = whiteSoxLogo
            break;
        case 'Minnesota Twins':
            awayLogo.src = twinsLogo
            break;
        case 'Detroit Tigers':
            awayLogo.src = tigersLogo
            break;
        case 'Cleveland Guardians':
            awayLogo.src = guardiansLogo
            break; 
        case 'New York Yankees':
            awayLogo.src = yankeesLogo
            break;
        case 'Boston Red Sox':
            awayLogo.src = redSoxLogo
            break;
        case 'Tampa Bay Rays':
            awayLogo.src = raysLogo
            break;
        case 'Baltimore Orioles':
            awayLogo.src = oriolesLogo
            break;
        case 'Toronto Blue Jays':
            awayLogo.src = blueJaysLogo
            break;
        case 'Miami Marlins':
            awayLogo.src = marlinsLogo
            break;
        case 'Philadelphia Phillies':
            awayLogo.src = philliesLogo
            break;
        case 'Washington Nationals':
            awayLogo.src = nationalsLogo
            break;
        case 'New York Mets':
            awayLogo.src = metsLogo
            break;
        case 'Atlanta Braves':
            awayLogo.src = bravesLogo
            break;
        case 'Seattle Mariners':
            awayLogo.src = marinersLogo
            break;
        case 'Oakland Athletics':
            awayLogo.src = athleticsLogo
            break;
        case 'Texas Rangers':
            awayLogo.src = rangersLogo
            break;
        case 'Los Angeles Angels':
            awayLogo.src = angelsLogo
            break;
        case 'Houston Astros':
            awayLogo.src = astrosLogo
            break;
        case 'Los Angeles Dodgers':
            awayLogo.src = dodgersLogo
            break;
        case 'San Diego Padres':
            awayLogo.src = padresLogo
            break;
        case 'San Francisco Giants':
            awayLogo.src = giantsLogo
            break;
        case 'Arizona Diamondbacks':
            awayLogo.src = dbacksLogo
            break;
        case 'Colorado Rockies':
            awayLogo.src = rockiesLogo
            break;
    }
    switch (homeTeam) {
        case 'Chicago Cubs':
            homeLogo.src = cubsLogo
            break;
        case 'St. Louis Cardinals':
            homeLogo.src = cardinalsLogo
            break;
        case 'Cincinnati Reds':
            homeLogo.src = redsLogo
            break;
        case 'Milwaukee Brewers':
            homeLogo.src = brewersLogo
            break;
        case 'Pittsburgh Pirates':
            homeLogo.src = piratesLogo
            break;
        case 'Kansas City Royals':
            homeLogo.src = royalsLogo
            break;
        case 'Chicago White Sox':
            homeLogo.src = whiteSoxLogo
            break;
        case 'Minnesota Twins':
            homeLogo.src = twinsLogo
            break;
        case 'Detroit Tigers':
            homeLogo.src = tigersLogo
            break;
        case 'Cleveland Guardians':
            homeLogo.src = guardiansLogo
            break; 
        case 'New York Yankees':
            homeLogo.src = yankeesLogo
            break;
        case 'Boston Red Sox':
            homeLogo.src = redSoxLogo
            break;
        case 'Tampa Bay Rays':
            homeLogo.src = raysLogo
            break;
        case 'Baltimore Orioles':
            homeLogo.src = oriolesLogo
            break;
        case 'Toronto Blue Jays':
            homeLogo.src = blueJaysLogo
            break;
        case 'Miami Marlins':
            homeLogo.src = marlinsLogo
            break;
        case 'Philadelphia Phillies':
            homeLogo.src = philliesLogo
            break;
        case 'Washington Nationals':
            homeLogo.src = nationalsLogo
            break;
        case 'New York Mets':
            homeLogo.src = metsLogo
            break;
        case 'Atlanta Braves':
            homeLogo.src = bravesLogo
            break;
        case 'Seattle Mariners':
            homeLogo.src = marinersLogo
            break;
        case 'Oakland Athletics':
            homeLogo.src = athleticsLogo
            break;
        case 'Texas Rangers':
            homeLogo.src = rangersLogo
            break;
        case 'Los Angeles Angels':
            homeLogo.src = angelsLogo
            break;
        case 'Houston Astros':
            homeLogo.src = astrosLogo
            break;
        case 'Los Angeles Dodgers':
            homeLogo.src = dodgersLogo
            break;
        case 'San Diego Padres':
            homeLogo.src = padresLogo
            break;
        case 'San Francisco Giants':
            homeLogo.src = giantsLogo
            break;
        case 'Arizona Diamondbacks':
            homeLogo.src = dbacksLogo
            break;
        case 'Colorado Rockies':
            homeLogo.src = rockiesLogo
            break;
    }
    gameCard.append(cardTitle, awayLogo, awayTeamRecord, homeLogo, homeTeamRecord, whoWillWin, awayWinBtn, awayVotes, homeWinBtn, homeVotes)
    gamesCollection.appendChild(gameCard)
}

const cubsLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chc.png'
const cardinalsLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/stl.png'
const redsLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cin.png'
const brewersLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mil.png'
const piratesLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/pit.png'
const royalsLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/kc.png'
const whiteSoxLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chw.png'
const twinsLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/min.png'
const tigersLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/det.png'
const guardiansLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cle.png'
const redSoxLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bos.png'
const yankeesLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nyy.png'
const oriolesLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bal.png'
const raysLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tb.png'
const blueJaysLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tor.png'
const nationalsLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/wsh.png'
const metsLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nym.png'
const marlinsLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mia.png'
const philliesLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/phi.png'
const bravesLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/atl.png'
const giantsLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sf.png'
const dodgersLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/lad.png'
const rockiesLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/col.png'
const dbacksLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/ari.png'
const padresLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sd.png'
const rangersLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tex.png'
const marinersLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sea.png'
const athleticsLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/oak.png'
const astrosLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/hou.png'
const angelsLogo = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/laa.png'