const imgsContainer = document.querySelector('.container');

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
    {id : 1, completeTitle : 'Ad Astra: Rumo às Estrelas (2019)', name: 'Ad Astra', pathFile : '../images/imgListas/list/Ad-Astra.png'},
    {id : 2, completeTitle : 'Akira (1988)', name: 'Akira', pathFile : '../images/imgListas/list/Akira.png'},
    {id : 3, completeTitle : 'Alien - O Oitavo Passageiro (1979)', name: 'Alien', pathFile : '../images/imgListas/list/Alien.png'},
    {id : 4, completeTitle : 'Aniquilação (2019)', name: 'Aniquilação', pathFile : '../images/imgListas/list/Aniquilacao.png'},
    {id : 5, completeTitle : 'A chegada (2016)', name: 'Arrival', pathFile : '../images/imgListas/list/Arrival.png'},
    {id : 6, completeTitle : '2001: Uma Odisséia no Espaço (1968)', name: '2001: UOE', pathFile : '../images/imgListas/list/ASO.png'},
    {id : 7, completeTitle : 'A.I.: Inteligência Artificial (2001)', name: 'A.I', pathFile : '../images/imgListas/list/IA.png'},
    {id : 8, completeTitle : 'A Origem - Inception (2010)', name: 'Inception', pathFile : '../images/imgListas/list/Inception.png'},
    {id : 9, completeTitle : '13° Andar (1999)', name: '13° Andar', pathFile : '../images/imgListas/list/TTT.png'}
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
}


const userList = new LinkedList();

const createDynamicElement = (numb, imagePath) => {
    const divElement = document.createElement('div');
    divElement.className = 'itemBox';

    const spanElement = document.createElement('span');
    spanElement.className = 'numb';
    spanElement.textContent = numb;

    const imgElement = document.createElement('img');
    imgElement.className = 'itemList';
    imgElement.src = imagePath;
    imgElement.alt = 'img list';

    const btnRemoveElement = document.createElement('button');
    btnRemoveElement.className = 'btnRemove';
    btnRemoveElement.textContent = '-';

    divElement.appendChild(spanElement);
    divElement.appendChild(imgElement);
    divElement.appendChild(btnRemoveElement);

    document.querySelector('.listBox').appendChild(divElement);

    // console.log('createDynamicElement - Index:', numb);
    // console.log('createDynamicElement - PathFile:', imagePath);
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
        document.querySelector('.hiddenOpcoes').classList.remove('hiddenInput');

        index = i;
        const movie = movies[index];

        tempImgAddedName = movie.name
        // console.log(movie.name);

        imgItemBoxElement.classList.add('itemList');
        imgItemBoxElement.classList.add('listAvailable');
        imgItemBoxElement.classList.add('imgAdd');
        imgItemBoxElement.src = movie.pathFile;

        spanItemBoxElement.classList.add('name');
        spanItemBoxElement.textContent = movie.completeTitle;

        itemBox.appendChild(imgItemBoxElement);
        itemBox.appendChild(spanItemBoxElement);

    });
    
    console.log('Linked list: ')
    userList.print();

    document.querySelector('.btnFechar').addEventListener('click', () => {
        document.querySelector('.hiddenOpcoes').classList.toggle('hiddenInput');
        imgItemBoxElement.remove();
        spanItemBoxElement.remove();
        index = 0;
    });
    
});

document.querySelector('.addInicio').addEventListener('click', () => {
    if (movies && movies.length > index && movies[index]) {
        
        if (imgAddedName.includes(tempImgAddedName))
        {
            console.log('Elemento já presente na lista!') 
        }
        else
        {
            const element = createDynamicElement(index + 1, movies[index].pathFile);
            userList.insertStart(element);
            
            document.querySelector('.listBox').addEventListener('click', (event) => {
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
        }
        
        imgAddedName.includes(movies[index].name) ? '' : imgAddedName.push(movies[index].name);
        
        console.log('imgAddedName: ' + imgAddedName);
        console.log('tempImgAddedName: ' + tempImgAddedName);
    }
    else
    {
        console.error('Movies está indefinido ou movies[index] é undefined.');
    }
});

document.querySelector('.addFim').addEventListener('click', () => {
    if (movies && movies.length > index && movies[index]) {
        
        if (imgAddedName.includes(tempImgAddedName))
        {
            console.log('Elemento já presente na lista!') 
        }
        else
        {
            const element = createDynamicElement(index + 1, movies[index].pathFile);
            userList.insertEnd(element);
            
            document.querySelector('.listBox').addEventListener('click', (event) => {
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
        }
        
        imgAddedName.includes(movies[index].name) ? '' : imgAddedName.push(movies[index].name);
        
        console.log('imgAddedName: ' + imgAddedName);
        console.log('tempImgAddedName: ' + tempImgAddedName);
    }
    else
    {
        console.error('Movies está indefinido ou movies[index] é undefined.');
    }
});

document.querySelector('.addMeio').addEventListener('click', () => {
    if (movies && movies.length > index && movies[index]) {

        const input = document.querySelector('.sectionSearch').classList.toggle('hiddenInput');
        console.log(input.value)
        if (input.value !== '')
        {
            if (imgAddedName.includes(tempImgAddedName))
            {
                console.log('Elemento já presente na lista!') 
            }
            else
            {
                const element = createDynamicElement(index + 1, movies[index].pathFile);
                userList.insertAfter(input.value, element);
                
                document.querySelector('.listBox').addEventListener('click', (event) => {
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
                            // Use the actual name added to imgAddedName
                            const removedItemName = imgAddedName[index];
    
                            // Remove the item from imgAddedName
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
    
                            itemBox.remove();  // Remove the DOM element
                            console.log('Elemento removido:', itemBox);
                        }
                    }
                });
            }
            
            imgAddedName.includes(movies[index].name) ? '' : imgAddedName.push(movies[index].name);
            
            console.log('imgAddedName: ' + imgAddedName);
            console.log('tempImgAddedName: ' + tempImgAddedName);
        }

    }
    else
    {
        console.error('Movies está indefinido ou movies[index] é undefined.');
    }
});

const handleClick = () => {
    document.querySelector('.menuTitulos').classList.toggle('hiddenSideAvailable');
    document.querySelector('.menuTitulos').classList.toggle('visibleSideAvailable');
};

document.querySelector('.botaoVerTitulos').addEventListener('click', handleClick);
document.querySelector('.arrowImg').addEventListener('click', handleClick);