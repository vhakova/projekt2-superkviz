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
let obsah = document.querySelector('.obsah');
let ilustrace = document.querySelector('.foto');
let moznosti = document.querySelector('#moznosti');
let odpovedi = document.querySelector('#odpovedi');
let vysledek = document.querySelector('.vysledek');
i = 0;

window.addEventListener("load", nactiOtazku);

function nactiOtazku() {
    //Vytvoření pořadí
    poradi.innerHTML = 'Otázka č. ' + Object.keys(kvizoveOtazky)[i+1] + ' z ' + Object.keys(kvizoveOtazky).length;
    
    //Vytvoření otázky
    otazka.innerHTML = kvizoveOtazky[i].otazka;

    //Vytvoření odpovědí
    let moznost1 = document.createElement('li');
    moznost1.innerHTML = kvizoveOtazky[i].odpoved[0];
    moznost1.onclick = dalsiOtazka;

    let moznost2 = document.createElement('li');
    moznost2.innerHTML = kvizoveOtazky[i].odpoved[1];
    moznost2.onclick = dalsiOtazka;

    let moznost3 = document.createElement('li');
    moznost3.innerHTML = kvizoveOtazky[i].odpoved[2];
    moznost3.onclick = dalsiOtazka;

    let moznost4 = document.createElement('li');
    moznost4.innerHTML = kvizoveOtazky[i].odpoved[3];
    moznost4.onclick = dalsiOtazka;

    //Vytvoření obrázku
    let fotka = document.createElement('img');
    fotka.id = 'obrazek';
    fotka.src = kvizoveOtazky[i].foto;

    //Generování obsahu
    ilustrace.appendChild(fotka);

    odpovedi.appendChild(moznost1);
    odpovedi.appendChild(moznost2);
    odpovedi.appendChild(moznost3);
    odpovedi.appendChild(moznost4);
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
}
    