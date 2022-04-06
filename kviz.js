let kvizoveOtazky = [

    {otazka: 'K čemu, mimo jiné, používá panda červená svůj ocásek?', 
    odpoved: ['jako přikrývku', 'jako vějíř', 'jako prachovku', 'jako uchošťour'],
    spravnaOdpoved: 'jako přikrývku',
    foto: 'obrazky/panda.jpg'},

    {otazka: 'Co umí ovce?', 
    odpoved: ['smát se', 'vyprávět vtipy', 'vařit', 'bruslit'],
    spravnaOdpoved: 'smát se',
    foto: 'obrazky/ovce.jpg'},

    {otazka: 'Jak se zdraví lední medvědi?', 
    odpoved: ['zvednutím tlapy', 'plivnutím na zem', 'třením čenichů', 'zakroucením zadkem'],
    spravnaOdpoved: 'třením čenichů',
    foto: 'obrazky/medved.jpg'},

    {otazka: 'Jakým způsobem se dokáží bavit makakové?', 
    odpoved: ['hrají Minecraft', 'vyšívají', 'hází po sobě sněhové koule', 'dívají se na televizi'],
    spravnaOdpoved: 'hází po sobě sněhové koule',
    foto: 'obrazky/makak.jpg'},

    {otazka: 'Která zvířata nemají pro svá mláďata školky?', 
    odpoved: ['vlci', 'kachny', 'divočáci', 'pavouci'],
    spravnaOdpoved: 'pavouci',
    foto: 'obrazky/pes.jpg'},
]

let kviz = document.querySelector('.kviz');
let poradi = document.querySelector('#poradi');
let otazka = document.querySelector('#otazka');
let fotka = document.querySelector('img');
let odpovedi = document.querySelector('#odpovedi');
let vysledek = document.querySelector('.vysledek');

let seznamOdpovedi = [];

i = 0;

window.addEventListener("load", nactiOtazku);

function nactiOtazku() {
    //Vytvoření pořadí
    poradi.innerHTML = 'Otázka č. ' + Object.keys(kvizoveOtazky)[i+1] + ' z ' + Object.keys(kvizoveOtazky).length;
    
    //Vytvoření otázky
    otazka.innerHTML = kvizoveOtazky[i].otazka;

    //Vytvoření odpovědí 
    let polozkaNabidky = odpovedi.querySelectorAll('li');

    for (let indexNabidky = 0; indexNabidky < polozkaNabidky.length; indexNabidky++) {
        polozkaNabidky[indexNabidky].innerHTML = kvizoveOtazky[i].odpoved[indexNabidky];
        polozkaNabidky[indexNabidky].onclick = dalsiOtazka;
    }    

    //Vytvoření obrázku
    fotka.src = kvizoveOtazky[i].foto;
}

function dalsiOtazka() {
    if ((i+1) < Object.keys(kvizoveOtazky).length) {
        i++;
        nactiOtazku();
    } else {ukazVysledek()}
}

function ukazVysledek() {
    kviz.style.display = 'none';
    vysledek.style.display = 'block';
    vypisVysledek();
}

function vypisVysledek() {
    
    for (let i = 0; i < Object.keys(kvizoveOtazky).length; i++) {
        let vypisOdpovedi = document.querySelector('#vypisOdpovedi');
        let polozkaVypisu = document.createElement('div');
        let otazkaVypisu = document.createElement('h3');

        otazkaVypisu.innerHTML = (i+1) + ' . ' + kvizoveOtazky[i].otazka;
        vypisOdpovedi.appendChild(polozkaVypisu);
        polozkaVypisu.appendChild(otazkaVypisu);
    }
}
    