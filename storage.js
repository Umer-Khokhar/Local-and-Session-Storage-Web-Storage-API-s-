// Some data to work with local and session storage!
const myArr = ["Umer", "Abbas", "Ali"];
const myObj = {
  name: "Umer Khokhar",
  age: 19,
  myFun: function () {
    console.log(this.name);
  },
};
// -----------Session Storage------------ //
// sessionStorage.setItem("MyFirstsStorage", myArr)
//--- Session storage is the storage to store data on the client side with the specific amount of the time when you close the browser window then session storage is no more avalible

localStorage.setItem("MyFirstsStorage", JSON.stringify(myObj)); // setItem with key, value pair

const myVal = localStorage.getItem("MyFirstsStorage"); // getItem by adding the key and get value in console or where you want!
//----------------------------//
// Web Storages always store data in strings so we can convert it using JSON.pase and convert object to string using JSON.stringify you should add both of those according the your need, Most of the errors might not happens
const myName = JSON.parse(myVal);
console.log(myName);

// -------- To remove the storage --------- //

// localStorage.removeItem("MyFirstsStorage")

// -------- To clear all the storage --------- //

// localStorage.clear()

// --- Local storage is the storage to store data on the client side with the unlimited amount of time even you close the browser window to tab data is still here and not deletion
