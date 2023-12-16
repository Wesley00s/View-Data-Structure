const usrEntity = document.querySelector('.usr');
const dispEntity = document.querySelector('.disp');
const softEntity = document.querySelector('.soft');
const hardEntity = document.querySelector('.hard');
const soEntity = document.querySelector('.so');
const conecEntity = document.querySelector('.conec');
const compEntity = document.querySelector('.comp');

const usrToDisp = document.querySelector('.usrToDisp');
const dispToHard = document.querySelector('.dispToHard');
const hardToComp = document.querySelector('.hardToComp');
const dispToSoft = document.querySelector('.dispToSoft');
const compToComp = document.querySelector('.compToComp');
const dispToSo = document.querySelector('.dispToSo');
const dispToConec = document.querySelector('.dispToConec');

const usrToDispLine1 = document.querySelector('.usrToDispLine1');
const usrToDispLine2 = document.querySelector('.usrToDispLine2');

const dispToHardLine1H = document.querySelector('.dispToHardLine1H');
const dispToHardLine1V = document.querySelector('.dispToHardLine1V');
const dispToHardLine2H = document.querySelector('.dispToHardLine2H');
const dispToHardLine2V = document.querySelector('.dispToHardLine2V');

const hardToCompLine1 = document.querySelector('.hardToCompLine1');
const hardToCompLine2 = document.querySelector('.hardToCompLine2');

const compToCompLine1 = document.querySelector('.compToCompLine1');
const compToCompLine2 = document.querySelector('.compToCompLine2');

const dispToSoftLine1H = document.querySelector('.dispToSoftLine1H');
const dispToSoftLine1V1 = document.querySelector('.dispToSoftLine1V1');
const dispToSoftLine1V2 = document.querySelector('.dispToSoftLine1V2');
const dispToSoftLine2H = document.querySelector('.dispToSoftLine2H');
const dispToSoftLine2V = document.querySelector('.dispToSoftLine2V');

const dispToSoLine1 = document.querySelector('.dispToSoLine1');
const dispToSoLine2 = document.querySelector('.dispToSoLine2');

const dispToConecLine1H = document.querySelector('.dispToConecLine1H');
const dispToConecLine1V = document.querySelector('.dispToConecLine1V');
const dispToConecLine2H = document.querySelector('.dispToConecLine2H');
const dispToConecLine2V = document.querySelector('.dispToConecLine2V');

usrEntity.addEventListener('click', () =>
{ 
    usrToDisp.classList.add('show');
    usrToDispLine1.classList.add('activeLine');
});

usrToDisp.addEventListener('click', () => { 
    dispEntity.classList.add('show');
    usrToDispLine2.classList.add('activeLine');
});

dispEntity.addEventListener('click', () => { 
    dispToHard.classList.add('show');
    dispToSoft.classList.add('show');
    dispToSo.classList.add('show');
    dispToConec.classList.add('show');

    dispToHardLine1H.classList.add('activeLine');
    dispToHardLine1V.classList.add('activeLine');

    dispToSoftLine1H.classList.add('activeLine');
    dispToSoftLine1V1.classList.add('activeLine');
    dispToSoftLine1V2.classList.add('activeLine');

    dispToSoLine1.classList.add('activeLine');

    dispToConecLine1H.classList.add('activeLine');
    dispToConecLine1V.classList.add('activeLine');
    
});

dispToHard.addEventListener('click', () => { 
    hardEntity.classList.add('show');
    dispToHardLine2H.classList.add('activeLine');
    dispToHardLine2V.classList.add('activeLine');
});

dispToSoft.addEventListener('click', () => { 
    softEntity.classList.add('show');

    dispToSoftLine2H.classList.add('activeLine');
    dispToSoftLine2V.classList.add('activeLine');

});

dispToSo.addEventListener('click', () => { 
    soEntity.classList.add('show');
    
    dispToSoLine2.classList.add('activeLine');
});

dispToConec.addEventListener('click', () => { 
    conecEntity.classList.add('show');

    dispToConecLine2H.classList.add('activeLine');
    dispToConecLine2V.classList.add('activeLine');
});

hardEntity.addEventListener('click', () => { 
    hardToComp.classList.add('show');

    hardToCompLine1.classList.add('activeLine');
});

hardToComp.addEventListener('click', () => { 
    compEntity.classList.add('show');

    hardToCompLine2.classList.add('activeLine');
});

compEntity.addEventListener('click', () => {
    compToComp.classList.add('show');
    compToCompLine1.classList.add('activeLine');
    compToCompLine2.classList.add('activeLine');
});