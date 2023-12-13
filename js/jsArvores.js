const mainNode = document.querySelector('.mainNode');
const branch1 = document.querySelectorAll('.branch1');
const games = document.querySelector('.games');
const gamesBranch = document.querySelectorAll('.gamesBranch');
const rpg = document.querySelector('.rpg');
const rpgGames = document.querySelectorAll('.rpgGames');
const fps = document.querySelector('.fps');
const fpsGames = document.querySelectorAll('.fpsGames');
const filmes = document.querySelector('.filmes');
const filmesBranch = document.querySelectorAll('.filmesBranch');
const scifi = document.querySelector('.scifi');
const scifiFilmes = document.querySelectorAll('.scifiFilmes');
const series = document.querySelector('.series');
const seriesBranch = document.querySelector('.seriesBranch');
const scifiSeries = document.querySelectorAll('.scifiSeries');
const gadgets = document.querySelector('.gadgets');
const gadgetsBranch = document.querySelectorAll('.gadgetsBranch');
const smartphones = document.querySelector('.smartphones');
const android = document.querySelector('.android');
const androidBranch = document.querySelectorAll('.androidBranch');
const smartphonesBranches = document.querySelectorAll('.smartphonesBranch');
const iphone = document.querySelector('.iphone');
const iphoneBranch = document.querySelectorAll('.iphoneBranch')
const smartwatches = document.querySelector('.smartwatches');
const smartwatchesBranch = document.querySelectorAll('.smartwatchBranch');

mainNode.addEventListener('click', () => branch1.forEach((e) => e.classList.add('show')));
games.addEventListener('click', () => gamesBranch.forEach((e) => e.classList.add('show')));
rpg.addEventListener('click', () =>  rpgGames.forEach((e) => e.classList.add('show')));
fps.addEventListener('click', () => fpsGames.forEach((e) => e.classList.add('show')));
filmes.addEventListener('click', () => filmesBranch.forEach((e) => e.classList.add('show')))
scifi.addEventListener('click', () => scifiFilmes.forEach((e) => e.classList.add('show')));
series.addEventListener('click', () => scifiSeries.forEach((e) => e.classList.add('show')));
gadgets.addEventListener('click', () => gadgetsBranch.forEach((e) => e.classList.add('show')));
smartphones.addEventListener('click', () => smartphonesBranches.forEach((e) => e.classList.add('show')));
android.addEventListener('click', () => androidBranch.forEach((e) => e.classList.add('show')));
iphone.addEventListener('click', () => iphoneBranch.forEach((e) => e.classList.add('show')));
smartwatches.addEventListener('click', () => smartwatchesBranch.forEach((e) => e.classList.add('show')));