function displayMenu() {
  "use strict";
  window.console.log("The Product Inventory Management System");
  window.console.log("");
  window.console.log("MENU");
  window.console.log("(v) View All Products");
  window.console.log("(u) Update Stock");
  window.console.log("(d) Clear Entire Stock");
  window.console.log("(e) Exit");
  window.console.log("");
}

function view(inventory) {
  "use strict";
  let item;
  for (item of inventory) {
    window.console.log(
      item[0] + " " + item[1] + " (" + item[2] + ") $" + item[3]
    );
  }
  window.console.log("");
}

function update(inventory) {
  "use strict";
  let sku;
  let item;
  let skuArray = [];
  let skuIndex;
  let qty;

  sku = window.prompt("Enter SKU number:");
  if (sku !== null) {
    sku = parseInt(sku);
    if (!isNaN(sku)) {
      for (item in inventory) {
        skuArray[item] = Number(inventory[item][0]);
      }
      skuIndex = skuArray.indexOf(sku);
      if (skuIndex !== -1) {
        qty = window.prompt("Enter new product quantity:");
        if (qty != null) {
          qty = parseInt(qty);
          if (!isNaN(qty)) {
            if (qty < 0) {
              window.alert("Quantity cannot be negative.");
            } else {
              inventory[skuIndex][2] = String(qty);
              window.alert("Stock Updated OK.");
              localStorage.inventory = inventory.join("|");
              view(inventory);
            }
          } else {
            window.alert("Invalid quantity.");
          }
        }
      } else {
        window.alert("Cannot find SKU in inventory.");
      }
    } else {
      window.alert("Invalid SKU number.");
    }
  }
}

function loadInventory(inventory) {
  "use strict";
  let storage = localStorage.getItem("inventory") || "";
  let item;
  let arrayStorage;
  if (storage.length > 0) {
    arrayStorage = storage.split("|");
    for (item in arrayStorage) {
      inventory[item] = arrayStorage[item].split(",");
    }
  } else {
    //If no localStorage then set initial data
    inventory[0] = [2233, "Hat", 12, 14.99];
    inventory[1] = [3223, "Socks", 36, 9.99];
    inventory[2] = [4824, "Shirt", 10, 15.99];
    inventory[3] = [6343, "Jeans", 22, 39.99];
    inventory[4] = [9382, "Jacket", 5, 49.99];
  }
  inventory.sort();
}

function main() {
  "use strict";
  let option;
  let inventory = [];

  loadInventory(inventory);
  displayMenu();

  while (true) {
    option = window.prompt("Select Menu Option:");
    if (option !== null) {
      if (option === "v") {
        view(inventory);
      } else if (option === "u") {
        update(inventory);
      } else if (option === "d") {
        inventory.length = 0;
        localStorage.inventory = "";
      } else if (option === "e") {
        window.alert("End of Application.");
        break;
      } else {
        window.alert("Incorrect menu option.\nPlease try again");
      }
    } else {
      break;
    }
  }
}

main();
