function getGames () {
    fetch('http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1')
    .then(res => res.json())
    .then(games => {
        for (let i=0; i <= games.dates[0].games.length; i++) {
            //console.log('games', games)
            renderGames(games, i)
        }
    })
}

const gamesCollection = document.getElementById('games-collection')

function renderGames (games, i) {
    
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