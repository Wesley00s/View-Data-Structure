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
console.log(images)


const movies = [
    '../images/imgListas/list/Ad-Astra.png',
    '../images/imgListas/list/Akira.png',
    '../images/imgListas/list/Alien.png',
    '../images/imgListas/list/Aniquilacao.png',
    '../images/imgListas/list/Arrival.png',
    '../images/imgListas/list/ASO.png',
    '../images/imgListas/list/IA.png',
    '../images/imgListas/list/Inception.png',
    '../images/imgListas/list/TTT.png',
    
    '../images/imgListas/list/Ad-Astra.png',
    '../images/imgListas/list/Akira.png',
    '../images/imgListas/list/Alien.png',
    '../images/imgListas/list/Aniquilacao.png',
    '../images/imgListas/list/Arrival.png',
    '../images/imgListas/list/ASO.png',
    '../images/imgListas/list/IA.png',
    '../images/imgListas/list/Inception.png',
    '../images/imgListas/list/TTT.png',

    '../images/imgListas/list/Ad-Astra.png',
    '../images/imgListas/list/Akira.png',
    '../images/imgListas/list/Alien.png',
    '../images/imgListas/list/Aniquilacao.png',
    '../images/imgListas/list/Arrival.png',
    '../images/imgListas/list/ASO.png',
    '../images/imgListas/list/IA.png',
    '../images/imgListas/list/Inception.png',
    '../images/imgListas/list/TTT.png',

    '../images/imgListas/list/Ad-Astra.png',
    '../images/imgListas/list/Akira.png',
    '../images/imgListas/list/Alien.png',
    '../images/imgListas/list/Aniquilacao.png',
    '../images/imgListas/list/Arrival.png',
    '../images/imgListas/list/ASO.png',
    '../images/imgListas/list/IA.png',
    '../images/imgListas/list/Inception.png',
    '../images/imgListas/list/TTT.png',

    '../images/imgListas/list/Ad-Astra.png',
    '../images/imgListas/list/Akira.png',
    '../images/imgListas/list/Alien.png',
    '../images/imgListas/list/Aniquilacao.png',
    '../images/imgListas/list/Arrival.png',
    '../images/imgListas/list/ASO.png',
    '../images/imgListas/list/IA.png',
    '../images/imgListas/list/Inception.png',
    '../images/imgListas/list/TTT.png',

    '../images/imgListas/list/Ad-Astra.png',
    '../images/imgListas/list/Akira.png',
    '../images/imgListas/list/Alien.png',
    '../images/imgListas/list/Aniquilacao.png',
    '../images/imgListas/list/Arrival.png',
    '../images/imgListas/list/ASO.png',
    '../images/imgListas/list/IA.png',
    '../images/imgListas/list/Inception.png',
    '../images/imgListas/list/TTT.png',

    '../images/imgListas/list/Ad-Astra.png',
    '../images/imgListas/list/Akira.png',
    '../images/imgListas/list/Alien.png',
    '../images/imgListas/list/Aniquilacao.png',
    '../images/imgListas/list/Arrival.png',
    '../images/imgListas/list/ASO.png',
    '../images/imgListas/list/IA.png',
    '../images/imgListas/list/Inception.png',
    '../images/imgListas/list/TTT.png',

    '../images/imgListas/list/Ad-Astra.png',
    '../images/imgListas/list/Akira.png',
    '../images/imgListas/list/Alien.png',
    '../images/imgListas/list/Aniquilacao.png',
    '../images/imgListas/list/Arrival.png',
    '../images/imgListas/list/ASO.png',
    '../images/imgListas/list/IA.png',
    '../images/imgListas/list/Inception.png',
    '../images/imgListas/list/TTT.png',

    '../images/imgListas/list/Ad-Astra.png',
    '../images/imgListas/list/Akira.png',
    '../images/imgListas/list/Alien.png',
    '../images/imgListas/list/Aniquilacao.png',
    '../images/imgListas/list/Arrival.png',
    '../images/imgListas/list/ASO.png',
    '../images/imgListas/list/IA.png',
    '../images/imgListas/list/Inception.png',
    '../images/imgListas/list/TTT.png',
]

const userList = [];

const createDynamicElement = (numb, imagePath) =>
{
    const divElement = document.createElement('div');
    divElement.className = 'itemBox';

    const spanElement = document.createElement('span');
    spanElement.className = 'numb';
    spanElement.textContent = numb;

    const imgElement = document.createElement('img');
    imgElement.className = 'itemList';
    imgElement.src = imagePath;
    imgElement.alt = 'img list';

    divElement.appendChild(spanElement);
    divElement.appendChild(imgElement);

    document.querySelector('.listBox').appendChild(divElement);

    return divElement;
}

let i = 0;
document.querySelector('.btnAdd').addEventListener('click', () => {
    const element = createDynamicElement(parseInt(i) + 1, movies[i]);
    userList.push(element);
    i++;
    console.log(userList[userList.length - 1]);
})

const removeElement = (index) => {
    if (index >= 0 && index < userList.length) {
    const removedElement = userList.splice(index, 1)[0];
    removedElement.remove();
    console.log('Elemento removido:', removedElement);
    }
}


document.querySelector('.btnRemove').addEventListener('click', () => {
    let searchTerm = document.querySelector('.searchMovie').value.trim();

    if (searchTerm !== '') {
        let index = userList.findIndex(user => user.textContent.includes(searchTerm));

        if (index !== -1) {
            removeElement(index);
        } else {
            console.log('Search term not found.');
        }
    } else {
        console.log('Please enter a search term.');
    }
});