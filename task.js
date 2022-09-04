//getChange(5, 0.99) должен вернуть [1,0,0,0,0,4]
//denominations: 1c, 5c, 10c, 25c, 50c, and $1

// function getChange(money, product) {
//     let denominations = [1, 5, 10, 25, 50, 100].reverse();
//     let change = money * 100 - product * 100;
//     const arr = [];
//     for(let coin  of denominations) {
//         console.log(change, coin);
//         arr.push(Math.floor(change / coin));
//         change %= coin;
//         console.log(arr);
//     }
//     return arr.reverse();
// }

// console.log(getChange(5, 0.23));