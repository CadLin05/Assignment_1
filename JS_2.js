console.log("This is javascript page 2");

const shoppingList = [];
//console.log("Empty, ", shoppingList);
shoppingList.push("Dried beans","Wet rice", "Spoiled soda", "Orange peels", "Brownie mix");
//console.log("Additions: ", shoppingList);
shoppingList[3] = "Can of Peas";
//console.log("Replacement ",shoppingList);
shoppingList.splice(0,1);
//console.log("spliced: ",shoppingList);
shoppingList.reverse();
list_length = shoppingList.length
console.log(`The list contains ${shoppingList.length} items`);