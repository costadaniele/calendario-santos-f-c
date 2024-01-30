
function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/logo-${player1}.png"
        alt="Logo do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/logo-${player2}.png"
        alt="Logo do ${player2}">
    </li>
`
}


function createCard(date, day, games) {
    return `
    <div class="card">
    <h2>${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
`
}


document.querySelector('#cards').innerHTML = `
        ${createCard('20/01', 'Sábado', createGame ('botafogo-sp', '18:00', 'santos'))}
        ${createCard('25/01', 'Quinta', createGame ('santos', '19:30', 'ponte-preta'))}
        ${createCard('28/01', 'Domingo', createGame ('palmeiras', '18:00', 'santos'))}
        ${createCard('31/01', 'Quarta', createGame ('agua-santa', '21:35', 'santos'))}
`