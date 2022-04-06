let kvizoveOtazky = [

    {otazka: 'K čemu, mimo jiné, používá panda červená svůj ocásek?', 
    odpoved: ['jako přikrývku', 'jako vějíř', 'jako prachovku', 'jako uchošťour'],
    indexPravdy: '0',
    foto: 'obrazky/panda.jpg'},

    {otazka: 'Co umí ovce?', 
    odpoved: ['smát se', 'vyprávět vtipy', 'vařit', 'bruslit'],
    indexPravdy: '0',
    foto: 'obrazky/ovce.jpg'},

    {otazka: 'Jak se zdraví lední medvědi?', 
    odpoved: ['zvednutím tlapy', 'plivnutím na zem', 'třením čenichů', 'zakroucením zadkem'],
    indexPravdy: '2',
    foto: 'obrazky/medved.jpg'},

    {otazka: 'Jakým způsobem se dokáží bavit makakové?', 
    odpoved: ['hrají Minecraft', 'vyšívají', 'hází po sobě sněhové koule', 'dívají se na televizi'],
    indexPravdy: '2',
    foto: 'obrazky/makak.jpg'},

    {otazka: 'Která zvířata nemají pro svá mláďata školky?', 
    odpoved: ['vlci', 'kachny', 'divočáci', 'pavouci'],
    indexPravdy: '3',
    foto: 'obrazky/pes.jpg'},
]

let kviz = document.querySelector('.kviz');
let poradi = document.querySelector('#poradi');
let otazka = document.querySelector('#otazka');
let fotka = document.querySelector('img');
let odpovedi = document.querySelector('#odpovedi');
let vysledek = document.querySelector('.vysledek');
let polozkaNabidky = odpovedi.querySelectorAll('li');

let seznamOdpovedi = [];

i = 0;

window.addEventListener("load", nactiOtazku);

function nactiOtazku() {
    //Vytvoření pořadí
    poradi.innerHTML = 'Otázka č. ' + Object.keys(kvizoveOtazky)[i+1] + ' z ' + Object.keys(kvizoveOtazky).length;
    
    //Vytvoření otázky
    otazka.innerHTML = kvizoveOtazky[i].otazka;

    //Vytvoření odpovědí 
    for (let indexNabidky = 0; indexNabidky < polozkaNabidky.length; indexNabidky++) {
        polozkaNabidky[indexNabidky].innerHTML = kvizoveOtazky[i].odpoved[indexNabidky];
        polozkaNabidky[indexNabidky].onclick = dalsiOtazka;
    }  
    
    //Vytvoření obrázku
    fotka.src = kvizoveOtazky[i].foto;
}

//Zaznamenání odpovědí
polozkaNabidky.forEach((tlacitko) => {
    tlacitko.addEventListener('click', zkontrolujOdpovedi);
});

function zkontrolujOdpovedi(udalost) {
    let tlacitko = udalost.target;
    let indexTlacitka = tlacitko.dataset.odpoved;
    let textTlacitka = tlacitko.innerHTML;

    console.log(indexTlacitka);

    seznamOdpovedi.push(textTlacitka);

    console.log(seznamOdpovedi);
}

//Změna otázky
function dalsiOtazka() {
    if ((i+1) < Object.keys(kvizoveOtazky).length) {
        i++;
        nactiOtazku();
    } else {ukazVysledek()}
}

//Změna z otázek na výsledky
function ukazVysledek() {
    kviz.style.display = 'none';
    vysledek.style.display = 'block';
    vypisVysledek();
}

//Zobrazení údajů ve výsledcích
function vypisVysledek() {
    let skore = document.querySelector('#skore');
    
    for (let i = 0; i < Object.keys(kvizoveOtazky).length; i++) {
        let vypisOdpovedi = document.querySelector('#vypisOdpovedi');
        let indexPravdy = kvizoveOtazky[i].indexPravdy;

        let otazkaVypisu = document.createElement('h3');
        let tvojeOdpoved = document.createElement('p');
        let spravnaOdpoved = document.createElement('p');

        otazkaVypisu.innerHTML = (i+1) + ' . ' + kvizoveOtazky[i].otazka;
        tvojeOdpoved.innerHTML = 'Tvá odpověď zní: ' + seznamOdpovedi[i];
        spravnaOdpoved.innerHTML = 'Správná odpověď byla: ' + kvizoveOtazky[i].odpoved[indexPravdy];

        vypisOdpovedi.appendChild(otazkaVypisu);
        vypisOdpovedi.appendChild(tvojeOdpoved);
        vypisOdpovedi.appendChild(spravnaOdpoved);
    }

    skore.innerHTML = 'Správně!';
}

function restart() {
    seznamOdpovedi = [];
    i = 0;
    vypisOdpovedi.innerHTML = ' ';
    kviz.style.display = 'block';
    vysledek.style.display = 'none';
    nactiOtazku();
}
    