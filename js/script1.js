/**
 * Creare un array di oggetti, ogni oggetto descriverà una bici
 * da corsa con le seguenti proprietà:
 * nome e peso
 * stampare a schermo la bici con peso minore.
*/

const biciclette = [
    {
        nome: 'Lombardo',
        peso: 20
    },
    {
        nome: 'Graziella',
        peso: 30
    },
    {
        nome: 'cletta',
        peso: 25
    },
    {
        nome: 'Zetta',
        peso: 15
    }
];


let biciLeggera;

biciclette.forEach((element) => {    
    if(!biciLeggera)
    {
        biciLeggera = element;
    }    
    let {peso} = element;
    if(peso < biciLeggera.peso)
    {
        biciLeggera = element;
    }
});

const writeHtml = document.getElementById('output');

writeHtml.innerHTML = `
    <div class="row">
        <div class="col-6">
            <h2>Bicicletta :${biciLeggera.nome}</h2>
        </div>
        <div class="col-6">
            <h2>Peso :${biciLeggera.peso}</h2>
        </div>
    </div>    
`;