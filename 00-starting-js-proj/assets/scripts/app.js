import { apikey } from "./util.js";
console.log(apikey);

import * as utils from "./util.js";
console.log(utils.thirdKey);

// DESTRUCTURING
const { name: userName, age } = {
  name: "John",
  age: 18,
};

console.log(userName);

// saves a string to the browser, even closing and reopening doesnt get deleted
function storeOrder({ id, currency }) {
  localStorage.setItem("id", id);
  localStorage.setItem("currency", currency);
}

const order = {
  id: 123,
  currency: "BGN",
};
storeOrder(order);

// CONTROL STRUCTURES
const password = prompt("Write your pass");
console.log(password);
