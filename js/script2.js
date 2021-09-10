/**
 * creare un array di oggetti di squadre di calcio
 * ogni squadra avrà diverse proprietà:
 * nome, punti fatti, falli subuti.
 * nome sarà l'unica proprietà da compilare  
 * le altre sarnno a 0
 * 
 * generare numeri random al posto degli 0 nelle proprieta
 * punti fatti e falli subiti
 * 
 * usando la destrutturazione creiamo un nuovo array
 * i cui elementi contengono solo nomi e falli subiti
 * e stampiamo tutto in console.
 */

 const squadre = [
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0,
        //metodo che ritorna la proprietà falli
        getFalli: function() {
            return this.falli
        }
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0,
        getFalli: function() {
            return this.falli
        }
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0,
        getFalli: function() {
            return this.falli
        }
    }
];

for(let squadra of squadre)
{
    squadra.punti = randomGen(0,20);
    squadra.falli = randomGen(0,10);
}
console.log (squadre);

// let arr = [];
// for(let element of squadre)
// {
//     ({nome, falli} = element);
//     // console.log (nome,falli);
//     arr.push({nome,falli});
// }
// console.log(arr);

const arr = squadre.map(element => {
    ({nome, falli} = element);
    return {nome,falli};
});
console.log(arr);

/**Restituisce un numero compreso tra min e max */
function randomGen (min, max){
    return Math.floor(Math.random()* (max-min)+1)+min;
}