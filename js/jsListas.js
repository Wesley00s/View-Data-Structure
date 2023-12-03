const imgsContainer = document.querySelector('.container');
const btnAddInicio = document.querySelector('.addInicio');
const btnAddFim = document.querySelector('.addFim');
const btnAddMeio = document.querySelector('.addMeio');
const input = document.querySelector('.sectionSearch');
const valueInput = document.querySelector('.searchMovie')
const hiddenOpcoes = document.querySelector('.hiddenOpcoes');
const btnCancelAddMeio = document.querySelector('.cancelAddMeio');
const btnConfirmAddMeio = document.querySelector('.confirmAddMeio');
const description = document.querySelector('.desc');
const titleSelected = document.querySelector('.titleSelected');
const yearSelected = document.querySelector('.year');
const bgList = document.querySelector('.bgList');
const boxDesc = document.querySelector('.boxDesc');
            const listBox = document.querySelector('.listBox');


class AddImagesSlider
{
    constructor(imgList, imgName)
    {
        this.imgName = imgName;
        this.imgList = imgList;
    }

    addInList()
    {
        const pathFileImg = `../images/imgListas/${this.imgName}`
        this.imgList.push(pathFileImg);
        
    }

    createImageElement()
    {
        this.imgList.forEach(imgSrc =>
        {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add('maxWidthSliders');
            img.classList.add('slider');
            imgsContainer.appendChild(img);
        });
    }
};

const images = [];

for (let j = 0; j < 5; j++) {
    const addImg = new AddImagesSlider(images, `icon-slide${j + 1}.png`);
    addImg.addInList();
}

const final = new AddImagesSlider(images, '');
final.createImageElement();

// Função para animação de lista de imagens iniciais
const startSliderAnimation = () =>
{
    const images = document.querySelectorAll('.slider'); // Pegar elemento do DOM
    let currentIndex = 0;

    function animateSlider()
    {
        const currentImage = images[currentIndex];

        setTimeout(() =>
        {
            currentImage.classList.add('focus');
            currentImage.classList.remove('maxWidthSliders');

            setTimeout(() =>
            {
                currentImage.classList.remove('focus');
                currentImage.classList.add('maxWidthSliders');

                currentIndex = (currentIndex + 1) % images.length; // Próxima imagem ou reinicia se atingir o final

                animateSlider(); // Chama recursivamente para a próxima imagem
            }, 1500);
        }, 0);
    }
    animateSlider(); 
}
startSliderAnimation();

const movies = [
    {
        id : 1,
        bg : '../images/imgListas/list/astra-bg.png',
        completeTitle: 'Ad Astra: Rumo às Estrelas',
        year : '(2019)',
        name : 'Ad Astra',
        pathFile: '../images/imgListas/list/Ad-Astra.png',
        desc : `
                    Este é outro título que você precisa assistir se é grande fã de ficção científica.
                    Ad Astra coloca Roy McBride(Brad Pitt) em uma viagem ao espaço para encontrar seu pai,
                    também astronauta.Os problemas começam a surgir quando ele descobre uma ameaça que pode
                    destruir a Terra e precisa correr contra o tempo para avisar todos em nosso planeta.
                `
    },
    {
        id: 2, bg: '../images/imgListas/list/akira-bg.png',
        completeTitle: 'Akira',
        year : '(1988)',
        name: 'Akira',
        pathFile: '../images/imgListas/list/Akira.png',
        desc : `
                    Akira é uma animação que engloba ficção científica, ação e drama com direção
                    e roteiro de Katsuhiro Ôtomo. Uma grande explosão fez com que Tóquio fosse destruída
                    em 1988. Em seu lugar foi construída Neo Tóquio, que, em 2019, sofre com atentados
                    terroristas por toda a cidade. Kaneda (Mitsuo Iwata) e Tetsuo (Nozomu Sasaki) são amigos
                    que integram uma gangue de motoqueiros. Eles disputam rachas violentos com uma gangue
                    rival, os Palhaços, até que um dia Tetsuo encontra Takashi (Tatsuhiko Nakamura),
                    uma estranha criança com poderes que fugiu do hospital onde era mantido como cobaia.
                    Tetsuo é ferido no encontro e antes de receber a ajuda dos amigos é levado por integrantes
                    do exército, liderados pelo coronel Shikishima (Tarô Ishida). A partir de então Tetsuo
                    passa a desenvolver poderes inimagináveis, o que faz com que seja comparado ao lendário
                    Akira, responsável pela explosão de 1988. Paralelamente, Kaneda se interessa por Kei
                    (Mami Koyama), uma garota envolvida com espiões que tenta decifrar o enigma por
                    trás das cobaias controladas pelo exército.
                `
    },
    {
        id : 3,
        bg : '../images/imgListas/list/alien-bg.png',
        completeTitle: 'Alien - O Oitavo Passageiro',
        year : '(1979)',
        name : 'Alien',
        pathFile: '../images/imgListas/list/Alien.png',
        desc : `
                    Uma nave espacial, ao retornar para Terra, recebe estranhos
                    sinais vindos de um asteróide. Ao investigarem o local, um
                    dos tripulantes é atacado por um estranho ser. O que parecia
                    ser um ataque isolado se transforma em um terror constante, pois
                    o tripulante atacado levou para dentro da nave o embrião de um
                    alienígena, que não para de crescer e tem como meta matar toda a tripulação.
                    Alien é um clássico da ficção científica dirigido por Ridley Scott
                    que ganhou sequências, crossovers e prequels. Sua cronologia é um
                    tanto confusa, mas pode ser organizada dessa forma:

                    Prometheus (2012), dirigido por Ridley Scott;
                    Alien: Covenant (2017), dirigido por Ridley Scott;
                    Alien, o Oitavo Passageiro (Alien, 1979), dirigido por Ridley Scott;
                    Aliens, O Resgate (Aliens, 1986), dirigido por James Cameron;
                    Alien 3 (1992), dirigido por David Fincher;
                    Alien – A Ressurreição (Alien: Resurrection, 1997), dirigido por Jean-Pierre Jeunet.
                    Fora dessa linha temporal estão os crossovers com o universo de O Predador.
                `
    },
    {
        id : 4,
        bg : '../images/imgListas/list/aniquilacao-bg.png',
        completeTitle: 'Aniquilação',
        year : '(2019)',
        name : 'Aniquilação',
        pathFile: '../images/imgListas/list/Aniquilacao.png',
        desc : `
                    Uma bióloga (Natalie Portman) se junta a uma expedição
                    secreta com outras três mulheres em uma região conhecida
                    como Área X, um local isolado da civilização onde as leis
                    da natureza não se aplicam. Lá, ela precisa lidar com uma
                    misteriosa contaminação, um animal mortal e ainda procurar
                    por pistas de colegas que desaparecem, incluindo seu marido
                    (Oscar Isaac). O longa conta ainda com Jennifer Jason Leigh,
                    Gina Rodriguez e Tessa Thompson no elenco, com direção de Alex Garland.
                `
    },
    {
        id : 5,
        bg : '../images/imgListas/list/arrival-bg.png',
        completeTitle: 'A chegada',
        year : '(2016)',
        name : 'Arrival',
        pathFile: '../images/imgListas/list/Arrival.png',
        desc : `
                    Quando seres interplanetários deixam marcas na Terra,
                    a Dra. Louise Banks (Amy Adams), uma linguista especialista
                    no assunto, é procurada por militares para traduzir os sinais
                    e desvendar se os alienígenas representam uma ameaça ou não.
                    No entanto, a resposta para todas as perguntas e mistérios
                    pode ameaçar a vida de Louise e a existência de toda a humanidade.
                    O elenco do longa conta ainda com nomes como Jeremy Renner e Forest
                    Whitaker, e a direção fica por conta de Denis Villeneuve.
                `
    },
    {
        id : 6,
        bg : '../images/imgListas/list/ASO-bg.png',
        completeTitle : '2001: Uma Odisséia no Espaço',
        year : '(1968)',
        name : '2001: UOE',
        pathFile: '../images/imgListas/list/ASO.png',
        desc : `
                    "2001" é uma história de evolução. Em algum momento no passado distante,
                    alguém ou algo incentivou a evolução ao colocar um monólito na Terra
                    (presumivelmente também em outro lugar do universo). A evolução permitiu
                    então que a humanidade alcançasse a superfície da Lua, onde foi encontrado
                    outro monólito, um que sinaliza aos placers de monólitos que a humanidade
                    evoluiu até aqui. Agora a humanidade, auxiliada pela inteligência artificial
                    (como HAL), deve ousar encontrar os colocadores de monólitos. Se for bem sucedido,
                    o próximo passo na evolução – seja ele qual for – será alcançado.—Larry Cousins

                `
    },
    {
        id : 7,
        bg : '../images/imgListas/list/AI-bg.png',
        completeTitle : 'A.I.: Inteligência Artificial',
        year : '(2001)',
        name: 'A.I',
        pathFile: '../images/imgListas/list/IA.png',
        desc: `
                Na metade do século XXI, o efeito estufa derreteu uma grande parte das calotas
                polares da Terra, fazendo com que boa parte das cidades litorâneas do planeta
                fiquem parcialmente submersas. Para controlar este desastre ambiental a humanidade
                conta com o auxílio de uma nova forma de computador independente, com inteligência
                artificial, conhecido como A.I. É neste contexto que vive o garoto David Swinton
                (Haley Joel Osment), que irá passar por uma jornada emocional inesquecível.
                O longa dramático tem direção de Steven Spielberg e roteiro assinado por Spielberg
                e Ian Watson. O elenco composto ainda por Jude Law, Frances O'Connor e Sam Robards.
            `
    },
    {
        id : 8,
        bg : '../images/imgListas/list/inception-bg.png',
        completeTitle : 'A Origem - Inception',
        year : '(2010)',
        name: 'Inception',
        pathFile: '../images/imgListas/list/Inception.png',
        desc : `
                    Com direção e roteiro de Christopher Nolan, A Origem mistura
                    suspense e ficção científica com uma pitada de ação em um longa
                    que não é para qualquer um. Em um mundo onde é possível entrar na
                    mente humana, Cobb (Leonardo DiCaprio) está entre os melhores na
                    arte de roubar segredos valiosos do inconsciente, durante o estado
                    de sono. Além disto ele é um fugitivo, pois está impedido de retornar
                    aos Estados Unidos devido à morte de Mal (Marion Cotillard). Desesperado
                    para rever seus filhos, Cobb aceita a ousada missão proposta por Saito
                    (Ken Watanabe), um empresário japonês: entrar na mente de Richard Fischer
                    (Cillian Murphy), o herdeiro de um império econômico, e plantar a ideia
                    de desmembrá-lo. Para realizar este feito ele conta com a ajuda do parceiro
                    Arthur (Joseph Gordon-Levitt), a inexperiente arquiteta de sonhos Ariadne
                    (Elliot Page) e Eames (Tom Hardy), que consegue se disfarçar de forma
                    precisa no mundo dos sonhos.
                `
    },
    {
        id : 9,
        bg : '../images/imgListas/list/TTT-bg .png',
        completeTitle : '13° Andar',
        year : '(1999)',
        name: '13° Andar',
        pathFile: '../images/imgListas/list/TTT.png',
        desc: `
                    O cientista da computação Hannon Fuller descobriu algo extremamente
                    importante. Ele está prestes a contar a descoberta ao seu colega
                    Douglas Hall, mas sabendo que alguém está atrás dele, o velho deixa
                    uma carta no mundo paralelo gerado por computador que sua empresa criou
                    (que parece os anos 30 com pessoas aparentemente reais com emoções reais).
                    Fuller é assassinado em nosso mundo real na mesma noite, e seu colega é suspeito.
                    Douglas descobre uma camisa ensanguentada em seu banheiro e não consegue se
                    lembrar do que estava fazendo na noite em que Fuller foi assassinado. Ele faz
                    login no sistema para encontrar a carta, mas precisa enfrentar o inesperado.
                    A verdade é mais dura do que ele jamais poderia imaginar...—Danny Rosenbluth
                `
    }
]

const containerAvailable = document.querySelector('.containerAvailable');

movies.forEach((movie) => {
    const itemBox = document.createElement('div');
    itemBox.classList.add('itemBox');

    const img = document.createElement('img');
    img.classList.add('itemList', 'listAvailable');
    img.src = movie.pathFile;
    img.alt = 'img list';

    const span = document.createElement('span');
    span.classList.add('name');
    span.textContent = movie.name;

    itemBox.appendChild(img);
    itemBox.appendChild(span);

    containerAvailable.appendChild(itemBox);
});

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertEnd(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.length++; 
    }

    insertStart(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insertAfter(targetData, newData) {
        const newNode = new Node(newData);
        let current = this.head;

        while (current) {
            if (current.data === targetData) {
                newNode.next = current.next;
                current.next = newNode;
                this.length++;
                return;
            }

            current = current.next;
        }

        console.log(`Elemento ${targetData} não encontrado.`);
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    size() {
        return this.length;
    }

    forEach(callback) {
        let current = this.head;
        while (current) {
        callback(current);
        current = current.next;
        }
    }
}

const userList = new LinkedList();

const createDynamicElement = (numb, imagePath) => {
    const divElement = document.createElement('div');
    divElement.className = 'itemBox';

    const spanElement = document.createElement('span');
    spanElement.className = 'numb';
    spanElement.textContent = `ID ${numb}`;

    const imgElement = document.createElement('img');
    imgElement.className = 'itemList';
    imgElement.classList.add('classUserList');
    imgElement.src = imagePath;
    imgElement.alt = 'img list';

    const btnRemoveElement = document.createElement('button');
    btnRemoveElement.className = 'btnRemove';
    btnRemoveElement.textContent = '-';

    divElement.appendChild(spanElement);
    divElement.appendChild(imgElement);
    divElement.appendChild(btnRemoveElement);

    document.querySelector('.listBox').appendChild(divElement);

    return divElement;
}

const itemBox = document.querySelector('.itemBox');
const imgItemBoxElement = document.createElement('img');
const spanItemBoxElement = document.createElement('span');


let index;
const imgAddedName = [];
let tempImgAddedName;

document.querySelectorAll('.listAvailable').forEach((item, i) => {
    item.addEventListener('click', () => {
        hiddenOpcoes.classList.remove('hiddenInput');

        index = i;
        const movie = movies[index];
        movie.id = index;

        tempImgAddedName = movie.name
        console.log('Nome do filme: ' + movie.name);
        console.log('ID: ' + movie.id);

        imgItemBoxElement.classList.add('itemList');
        imgItemBoxElement.classList.add('listAvailable');
        imgItemBoxElement.classList.add('imgAdd');
        imgItemBoxElement.src = movie.pathFile;

        spanItemBoxElement.classList.add('name');
        spanItemBoxElement.textContent = movie.completeTitle;

        itemBox.appendChild(imgItemBoxElement);
        itemBox.appendChild(spanItemBoxElement);

    });
    
    document.querySelector('.btnFechar').addEventListener('click', () => {
        hiddenOpcoes.classList.add('hiddenInput');
        input.classList.add('hiddenInput');
        btnAddInicio.classList.remove('hiddenInput');
        btnAddFim.classList.remove('hiddenInput');
        btnAddMeio.classList.remove('hiddenInput');
        imgItemBoxElement.remove();
        spanItemBoxElement.remove();
        index = 0;
    });
    
});

const handleButtonClick = (actionType) =>
{
    if (movies && movies.length > index && movies[index]) {
        if (imgAddedName.includes(tempImgAddedName)) {
            console.log('Elemento já presente na lista!');
        } else {
            let element, insertMethod;

            switch (actionType) {
                case 'addInicio':
                    element = createDynamicElement(index + 1, movies[index].pathFile);
                    userList.insertStart(element);
                    insertMethod = 'insertStart';
                    break;
                case 'addFim':
                    element = createDynamicElement(index + 1, movies[index].pathFile);
                    userList.insertEnd(element);
                    insertMethod = 'insertEnd';
                    break;
                case 'addMeio':
                    input.classList.toggle('hiddenInput');
                    btnAddInicio.classList.toggle('hiddenInput');
                    btnAddFim.classList.toggle('hiddenInput');
                    btnAddMeio.classList.toggle('hiddenInput');
                    return;

                    console.log(`Input: ${valueInput.value}`);
                //     if (valueInput.value !== '') {
                //         btnConfirmAddMeio.addEventListener('click', () => {
                //             element = createDynamicElement(index + 1, valueInput[index].pathFile);
                //             userList.insertAfter(parseInt(valueInput.value), element);
                //             insertMethod = 'insertMiddle';
                //             console.log('AddMeioClicked!');
                //         });

                //         btnCancelAddMeio.addEventListener('click', () => {
                //         input.classList.toggle('hiddenInput');
                //         btnAddInicio.classList.toggle('hiddenInput');
                //         btnAddFim.classList.toggle('hiddenInput');
                //         btnAddMeio.classList.toggle('hiddenInput');
                //     });
                // }
                break;
            default:
                console.error('Ação não reconhecida.');
                return;
            }

            listBox.innerHTML = '';

            userList.forEach((node) => {
                listBox.appendChild(node.data);
            });

            listBox.addEventListener('click', (event) => {
                if (event.target.classList.contains('btnRemove')) {
                    const itemBox = event.target.closest('.itemBox');

                    let current = userList.head;
                    let previous = null;
                    let found = false;

                    while (current) {
                        if (current.data === itemBox) {
                            found = true;
                            break;
                        }

                        previous = current;
                        current = current.next;
                    }

                    if (found) {
                        const removedItemName = imgAddedName[index];

                        const indexToRemove = imgAddedName.indexOf(removedItemName);
                        if (indexToRemove !== -1) {
                            imgAddedName.splice(indexToRemove, 1);
                            console.log('Elemento removido de imgAddedName:', removedItemName);
                        }

                        if (previous) {
                            previous.next = current.next;
                        } else {
                            userList.head = current.next;
                        }

                        itemBox.remove();
                        console.log('Elemento removido:', itemBox);
                    }
                }
            });

            imgAddedName.includes(movies[index].name) ? '' : imgAddedName.push(movies[index].name);

            console.log('imgAddedName: ' + imgAddedName);
            console.log('tempImgAddedName: ' + tempImgAddedName);
        }
    } else {
        console.error('Movies está indefinido ou movies[index] é undefined.');
    }
    console.log('Linked list: ')
    userList.print();
}


 listBox.addEventListener('click', (event) => { 
    if (event.target.classList.contains('classUserList')) 
    {
        const itemBox = event.target.closest('.classUserList');
        
        for (let i = 0; i < movies.length; i++)
        {
            let url = movies[i].pathFile;
            let srcSelected = new URL(url, window.location.origin).href;
            if (srcSelected === itemBox.src)
            {
                src = movies[i].bg;
                titleSelected.innerHTML = '';
                description.innerHTML = '';

                titleSelected.innerHTML = movies[i].completeTitle;
                
                description.innerHTML = movies[i].desc
                yearSelected.innerHTML = movies[i].year;
                // console.log(url)
                console.log(bgList);
                bgList.src = src;  
                console.log("Elemento clicado!");
                bgList.classList.toggle('bgListAnimation');
                boxDesc.classList.toggle('animationBoxDesc');
            }
        }
        
    }
});

// btnCancelAddMeio.addEventListener('click', () => { 
//     input.classList.toggle('hiddenInput');
//     btnAddInicio.classList.toggle('hiddenInput');
//     btnAddFim.classList.toggle('hiddenInput');
//     btnAddMeio.classList.toggle('hiddenInput');
// });

btnAddInicio.addEventListener('click', () => handleButtonClick('addInicio'));
btnAddFim.addEventListener('click', () => handleButtonClick('addFim'));
btnAddMeio.addEventListener('click', () => handleButtonClick('addMeio'));

const handleClick = () => {
    document.querySelector('.menuTitulos').classList.toggle('hiddenSideAvailable');
    document.querySelector('.menuTitulos').classList.toggle('visibleSideAvailable');
};

document.querySelector('.botaoVerTitulos').addEventListener('click', handleClick);
document.querySelector('.arrowImg').addEventListener('click', handleClick);