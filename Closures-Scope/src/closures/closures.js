const moneyBox = (coins) =>{
var saveCoins = 0;
saveCoins += coins;
console.log(`moneyBox: $${saveCoins}`);

}
moneyBox(5);
moneyBox(10);





const moneyBox = () =>{
    var saveCoins = 0;
    const countCoins = (coins) =>{
saveCoins+= coins;
console.log(`moneyBox: $${saveCoins}`);
    }
    return countCoins;
};
let mymoneybox = moneyBox();
mymoneybox(4);
mymoneybox(6);
mymoneybox(10);