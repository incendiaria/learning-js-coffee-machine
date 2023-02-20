let secretRecipe = [{choice: 1, type: 'espresso', water: 250, beans: 16, milk: 0, cups: 1, money: 4},
                    {choice: 2, type: 'latte', water: 350, beans: 20, milk: 75, cups: 1, money: 7},
                    {choice: 3, type: 'cappuccino', water: 200, beans: 12, milk: 100, cups: 1, money: 6}];
let machineInventory = {water: 400, beans: 120, milk: 540, cups: 9, money: 550};
const input = require('sync-input');
let action = "";
let choice = "";
let changeFor = "";

while (action != "exit") {
action = input('Write action (buy, fill, take, remaining, exit)')  
switch (action){
  case "buy":
     choice = input('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu')
    if (choice ==="back"){
        break;
    }else{
        change(--choice)
        checkInventory(--choice)
    }
    break;
  case "fill":
    fill()
    break;
  case "take":
    take()
    break;
  case "remaining":
    remaining();
    break;
  case "exit":
  break;
}
}
function change(n){
    changeFor = input('Do you need change? Type 0 - NO or tell me how much money you have');
    if (changeFor == 0){
        console.log (`OK!`);
    }else if ((machineInventory.money + secretRecipe[n].money) < changeFor){
     console.log ("I don't have that change");
    }else{
        let change = changeFor - (machineInventory.money + secretRecipe[n].money)
        console.log (`Sure! Here's your change of $${change}`);
    }
}

function remaining(){
  console.log(`The coffee machine has:
                  ${machineInventory.water} ml of water
                  ${machineInventory.milk} ml of milk
                  ${machineInventory.beans} g of coffee beans
                  ${machineInventory.cups} disposable cups
                  ${machineInventory.money} of money`  
                  )
}
function checkInventory(n){
    if (secretRecipe[n].water > machineInventory.water) {
      return console.log('Sorry, not enough water!')
    }else if (secretRecipe[n].beans > machineInventory.beans){
      return console.log('Sorry, not enough beans!')
    }else if (secretRecipe[n].milk > machineInventory.milk){
      return console.log('Sorry, not enough milk!')
    }else if (secretRecipe[n].cups > machineInventory.cups){
      return console.log('Sorry, not enough cups!')
    }else{
      inventory(n);
      return console.log('I have enough resources, making you a coffee!');
    }
}

function inventory(n) {
    machineInventory.water += - secretRecipe[n].water
    machineInventory.beans += - secretRecipe[n].beans
    machineInventory.milk += - secretRecipe[n].milk
    machineInventory.cups += - secretRecipe[n].cups
    machineInventory.money += secretRecipe[n].money
}

function fill (){
    machineInventory.water += (input('Write how many ml of water you want to add:') - 0);
    machineInventory.milk += (input('Write how many ml of milk you want to add:') - 0);
    machineInventory.beans += (input('Write how many grams of coffee beans you want to add:') - 0);
    machineInventory.cups += (input('Write how many disposable cups you want to add: ') - 0);
}
function take (){
    console.log(`I gave you $${machineInventory.money}`);
    machineInventory.money = 0;
}