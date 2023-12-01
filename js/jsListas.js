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
function startSliderAnimation()
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
