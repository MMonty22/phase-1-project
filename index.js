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
