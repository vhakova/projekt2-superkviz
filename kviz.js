let kvizoveOtazky = [
    {otazka: 'K čemu, mimo jiné, používá panda červená svůj ocásek?', 
        odpovedA: 'jako přikrývku', 
        odpovedB: 'jako vějíř', 
        odpovedC: 'jako prachovku', 
        odpovedD: 'jako uchošťour',
        foto: 'obrazky/panda.jpg'},
    {otazka: 'Co umí ovce?', 
        odpovedA: 'smát se', 
        odpovedB: 'vyprávět vtipy', 
        odpovedC: 'vařit', 
        odpovedD: 'bruslit',
        foto: 'obrazky/ovce.jpg'},
    {otazka: 'Jak se zdraví lední medvědi?', 
        odpovedA: 'zvednutím tlapy', 
        odpovedB: 'plivnutím na zem', 
        odpovedC: 'třením čenichů', 
        odpovedD: 'zakroucením zadkem',
        foto: 'obrazky/medved.jpg'},
    {otazka: 'Jakým způsobem se dokáží bavit makakové?', 
        odpovedA: 'hrají Minecraft', 
        odpovedB: 'vyšívají', 
        odpovedC: 'hází po sobě sněhové koule', 
        odpovedD: 'dívají se na lidi',
        foto: 'obrazky/makak.jpg'},
    {otazka: 'Která zvířata nemají pro svá mláďata školky?', 
        odpovedA: 'vlci', 
        odpovedB: 'kachny', 
        odpovedC: 'divočáci', 
        odpovedD: 'pavouci',
        foto: 'obrazky/pes.jpg'},
]

let kviz = document.querySelector('.kviz');

for (let i = 0; i < kvizoveOtazky.length; i = i + 1) {

    //Vytvoření otázky
    let otazka = document.createElement('div');
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

    //Vytvoření odpovědi A
    let odpovedA = document.createElement('li');
    odpovedA.innerHTML = kvizoveOtazky[i].odpovedA;

    //Vytvoření odpovědi B
    let odpovedB = document.createElement('li');
    odpovedB.innerHTML = kvizoveOtazky[i].odpovedB;

    //Vytvoření odpovědi C
    let odpovedC = document.createElement('li');
    odpovedC.innerHTML = kvizoveOtazky[i].odpovedC;

    //Vytvoření odpovědi D
    let odpovedD = document.createElement('li');
    odpovedD.innerHTML = kvizoveOtazky[i].odpovedD;

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
    odpovedi.appendChild(odpovedA);
    odpovedi.appendChild(odpovedB);
    odpovedi.appendChild(odpovedC);
    odpovedi.appendChild(odpovedD);
}