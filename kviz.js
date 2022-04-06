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
i = 0;

function nactiOtazku() {
    //Vytvoření pořadí
    poradi.innerHTML = 'Otázka č. ' + Object.keys(kvizoveOtazky)[i+1] + ' z ' + Object.keys(kvizoveOtazky).length;
    
    //Vytvoření otázky
    otazka.innerHTML = kvizoveOtazky[i].otazka;

    //Vytvoření odpovědí
    let moznost1 = document.createElement('li');
    moznost1.innerHTML = kvizoveOtazky[i].odpoved[0];

    let moznost2 = document.createElement('li');
    moznost2.innerHTML = kvizoveOtazky[i].odpoved[1];

    let moznost3 = document.createElement('li');
    moznost3.innerHTML = kvizoveOtazky[i].odpoved[2];

    let moznost4 = document.createElement('li');
    moznost4.innerHTML = kvizoveOtazky[i].odpoved[3];

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
    