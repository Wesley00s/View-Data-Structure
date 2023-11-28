Array.from(document.getElementsByClassName('gameItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = games[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = games[i].gameName;
})

let games = [
    {id: 0, nome: "El Diablo", imagem: "images/vetor/diablo.jpg"},
    {id: 1, nome: "Mass Effect", imagem: "images/vetor/mass_effect.jpg"},
    {id: 2, nome: "Cyberpunk 2077", imagem: "images/vetor/cyberpunk.jpg"},
    {id: 3, nome: "Horizon Zero Dawn", imagem: "images/vetor/horizon.jpg"},
    {id: 4, nome: "The Elder Scrolls", imagem: "images/vetor/theElder.jpg"},
    {id: 5, nome: "Stardew Valley", imagem: "images/vetor/stardew.jpg"},
    {id: 6, nome: "Warcraft", imagem: "images/vetor/warcraft.jpg"},
    {id: 7, nome: "The Witcher", imagem: "images/vetor/witcher.jpg"},
    {id: 8, nome: "Mount && Blade", imagem: "images/vetor/mount.jpg"},
]

function inserirGame(nome, imagem){
    const jogo = {
        id: games.length,
        nome: nome,
        imagem: imagem
    };
    games.push(jogo);
}

function removerGame(nome){
    games = games.filter(game => game.nome !== nome)
}

function procurarGame(nome){
    const result = games.filter(game => game.nome.toLowerCase().includes(nome.toLowerCase()));
    return result;
}

document.getElementById('inserirBtn').addEventListener('click', function(){
    inserirGame("jogo", "images/vetor/jogo.jpg")
})

document.getElementById('removerBtn').addEventListener('click', function(){
    removerGame("nome");
})

document.getElementById('procurarGame').addEventListener('click', function(){
    procurarGame("nome");
})