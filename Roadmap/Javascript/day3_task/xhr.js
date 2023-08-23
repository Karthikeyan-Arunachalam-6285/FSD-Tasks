const { log } = require("console");
let XMLHttpRequest = require("xhr2");

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.onload = function () {
  let users = JSON.parse(xhr.responseText);
  let getOutput = [];
  let Flags = [];
  for (let user of users) {
    getOutput.push(
      user.name.common ? user.name.common : "",
      user.region ? user.region : "",
      user.subregion ? user.subregion : "",
      user.population ? user.population : "",
      user.name.flag ? user.flag : ""
    );
    Flags.push(user.flag ? user.flag : "");
  }
  console.log("The day 3 Task 2" + getOutput, "The day 3 Task 3" + Flags);
};
xhr.send();
