/**
 * Snack 3
 * Scrivere una funzione che accetti tre argomenti:
 * un array e due numeri (a più piccolo di b).
 * 
 * La funzione ritornerà un nuovo array
 * con i valori che hanno la posizione (indice)
 * compresa tra i due numeri specificati.
 * 
 * Usiamo i nuovi metodi degli array forEach() o filter().
 * */

/**Creazione di due array contenti diversi tipo di dati */
const lista1 = [0, 2, 3, 10, 50, 32, 70, 84, 95, 13];
const lista2 = [
    {nome   :   'frase'      ,   val :   9809},    
    {nome   :   'prova'      ,   val :   111},
    {nome   :   'altra'      ,   val :   324},
    {nome   :   'ancora'     ,   val :   123},
    {nome   :   'discorso'   ,   val :   633},
    {nome   :   'non'        ,   val :   34},
    {nome   :   'tries'      ,   val :   122},
    {nome   :   'testo'      ,   val :   909},
    {nome   :   'heya'       ,   val :   3},
    {nome   :   'firaga'     ,   val :   1},
    {nome   :   'blizzara'   ,   val :   7},
];

/**
 * Funzione scritta con l'arrow function
 * Con il forEach(), per ogni valore compreso tra i due indici a e b
 * viene aggiunto ad un nuovo array il contenuto dell'elemento
 */
const calcPosEach = (arr, a, b) => {
    // if(a >= b)
    // {
    //     return false;
    // }
    const arrShorted = [];
    arr.forEach((element,index) => {
        if (index >= a && index <= b)
        {        
            arrShorted.push(element);
        }
    }); 
    return arrShorted;
};

/**
 * Funzione scritta con l'arrow function
 * Con il filter(), per ogni valore compreso tra i due indici a e b
 * viene aggiunto ad un nuovo array il contenuto dell'elemento
 */
const calcPosFilter = (arr, a, b) => {
    // if(a >= b)
    // {
    //     return false;
    // }
    return arr.filter((element,index) => (index >= a && index <= b) ? true : false);
    // return arr.filter((element,index) =>{
    //     return (index >= a && index <= b) ? true : false;
    // });;
};


//Output per mostrare il primo array (lista1)
const listaNewEach1 = calcPosEach(lista1, 8, 7);
const listaNewFilter1 = calcPosFilter(lista1, 3, 8);
console.log(listaNewEach1);
console.log(listaNewFilter1);

//Output per mostrare il secondo array (lista2)
const listaNewEach2 = calcPosEach(lista2, 3, 7);
const listaNewFilter2 = calcPosFilter(lista2, 3, 8);
console.log(listaNewEach2);
console.log(listaNewFilter2);

