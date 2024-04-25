"use strict";

//1.1:

let names = ["Lars", "Peter", "Jan", "Bo"];

let myFilteredArray = myFilter(names, (name) => name.length > 2);

let filterFilteredArray = names.filter((name) => name.length > 2);

console.log("My filter function:")
myFilteredArray.forEach(console.log);

console.log("JavaScript filter function:")
filterFilteredArray.forEach(console.log);

console.log("//////////////////////////////////////////////////");

function myFilter(array, callback){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            result[i] = array[i];
        };
    };
    return result;
}

//1.2

let myMappedArray = myMap(names, (name) => `Name: ${name}`);

let mapMappedArray = names.map((name) => `Name: ${name}`);

console.log("My map function:")
myMappedArray.forEach(console.log);

console.log("JavaScript map function:")
mapMappedArray.forEach(console.log);

console.log("//////////////////////////////////////////////////");

function myMap(array, callback){
    let result = [];
    for(let i = 0; i < array.length; i++){
        result[i] = callback(array[i]);
    }
    return result;
}

Array.prototype.myFilter = function(callback){
    let result = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            result[i] = this[i];
        }
    }
    return result;
};

Array.prototype.myMap = function(callback){
    let result = [];
    for(let i = 0; i < this.length; i++){
        result[i] = callback(this[i]);
    }
    return result;
}

let newFilteredArray = names.myFilter((name) => name.length > 2);

let newMappedArray = names.myMap((name) => `Name: ${name} but now as a prototype property!`);

newFilteredArray.forEach(console.log);

newMappedArray.forEach(console.log);


//1.3

const divCollection = document.getElementsByTagName("DIV");
console.log(divCollection.length);
const divArray = Array.from(divCollection);
divArray.forEach(console.log);

for(let i = 0; i < divCollection.length; i++){
    divCollection[i].style.backgroundColor = "red";
}

const clickButton = document.getElementById("clickButton");
clickButton.addEventListener('click', () => {
    for(let i = 0; i < divCollection.length; i++){
        divCollection[i].style.backgroundColor = Math.floor(Math.random()*16777215).toString(16);
    }
})
