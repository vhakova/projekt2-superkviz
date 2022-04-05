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

for (let i = 0; i < kvizoveOtazky.length; i = i + 1) {

    //Vytvoření otázky
    let otazka = document.createElement('h2');
    otazka.id = 'otazka';
    otazka.innerHTML = kvizoveOtazky[i].otazka;

    //Fotka + odpovědi
    let obsah = document.createElement('div');
    obsah.className = 'obsah';

    //Fotka + odpovědi
    let moznosti = document.createElement('div');
    moznosti.id = 'moznosti';

    //Vytvoření sekce odpovědí
    let odpovedi = document.createElement('ul');
    odpovedi.id = 'odpovedi';

    //Vytvoření odpovědí
    let moznost1 = document.createElement('li');
    moznost1.innerHTML = kvizoveOtazky[i].odpoved[0];

    let moznost2 = document.createElement('li');
    moznost2.innerHTML = kvizoveOtazky[i].odpoved[1];

    let moznost3 = document.createElement('li');
    moznost3.innerHTML = kvizoveOtazky[i].odpoved[2];

    let moznost4 = document.createElement('li');
    moznost4.innerHTML = kvizoveOtazky[i].odpoved[3];

    //Obrázek
    let ilustrace = document.createElement('div');
    ilustrace.className = 'foto';

    let fotka = document.createElement('img');
    fotka.id = 'obrazek';
    fotka.src = kvizoveOtazky[i].foto;

    //Generování obsahu    
    kviz.appendChild(otazka);
    kviz.appendChild(obsah);

    obsah.appendChild(ilustrace);
    ilustrace.appendChild(fotka);

    obsah.appendChild(moznosti);
    moznosti.appendChild(odpovedi);
    odpovedi.appendChild(moznost1);
    odpovedi.appendChild(moznost2);
    odpovedi.appendChild(moznost3);
    odpovedi.appendChild(moznost4);
}