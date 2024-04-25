"use strict";
//1.4

const newDivCollection = document.getElementsByTagName("DIV");
const paragraph = document.getElementById("text");
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
const container = document.getElementById("table-container");
const carContainer = document.getElementById("car-container");
const filteredContainer = document.getElementById("filtered-container");



container.innerHTML = arrayToHTMLString(names);

for(let i = 0; i < newDivCollection.length; i++){
    newDivCollection[i].addEventListener('click', () => {
        paragraph.innerText = `Hi from ${newDivCollection[i].id}`;
    });
}


const outerDiv = document.getElementById("outer");
outerDiv.addEventListener('click', (event) => {
    paragraph.innerText = event.target.id;
});



//1.5
const submitForm = document.getElementById("submitForm");


names.forEach(console.log);

submitForm.addEventListener('submit', (event) => {
    let text = document.getElementById("inputText").value;
    names[names.length] = text;
    names.forEach(console.log);
    event.preventDefault();
    container.innerHTML = arrayToHTMLString(names);
});

const removeFirstBtn = document.getElementById("remove-first");
const removeLastBtn = document.getElementById("remove-last");

removeFirstBtn.addEventListener( 'click',() => {
    names.shift();
    container.innerHTML = arrayToHTMLString(names);
});


removeLastBtn.addEventListener('click',() => {
    names.pop();
    container.innerHTML = arrayToHTMLString(names);
})

function arrayToHTMLString (array){
    let result = array.map((x) => `<li>${x}</li>`).join('');
    result = `<ul>${result}</ul>`;
    return result;
};


//1.6
let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

//Tried using the Object.keys method to get the keys of the object, but later found out, that there is an easier way of looping over the keys.
function arrayToHTMLTable(array){
    //let keys = Object.keys(array[0]);
    let result = "";

    for(let key in array[0]){
        result += `<th>${key}</th>`;
    }


    /* for(let i = 0; i < keys.length; i++){
        result += `<th>${keys[i]}</th>`
    } */

    let header = `<tr>${result}</tr>`;



    /* let body = array.map((x) => {
        let res = ""
        for(let i = 0; i < keys.length; i++){
            res += `<td>${Object.values(x)[i]}</td>`
        }
        res = `<tr>${res}</tr>`;
        return res;
    }) */


    let body = array.map((x) => {
        let res = "";
        for(let key in x){
            res += `<td>${x[key]}</td>`;
        }
        res = `<tr>${res}</tr>`;
        return res;
    });


    let combined = header + body.join("");

    result = `<table>${combined}</table>`;
    return result;
}


const filterButton = document.getElementById("filterSubmit");

//Tried throwing errors, but we haven't learned how to properly catch them yet, so I just console.log them instead.
filterButton.addEventListener("click", (event) => {
    let input = document.getElementById("filterInput").value;
    //if(input !== Number){
    //    throw new Error("Parameter is not a number");
    //}
    if(isNaN(input)){
        console.log("Input "+input+" is not a number");
        return;
    }
    let toReturn = filterCarsByPrice(cars, input);
    if(toReturn.length === 0){
        //throw new Error("No cars with price under: "+input);
        console.log("No cars with price under input: "+input);
        return;
    }
    console.log(toReturn);
    event.preventDefault();
    filteredContainer.innerHTML = arrayToHTMLTable(toReturn);
})


function filterCarsByPrice(array, input){
    array = array.filter((x) => x.price < input);
    return array;
}

carContainer.innerHTML = arrayToHTMLTable(cars);

filteredContainer.innerHTML = arrayToHTMLTable(cars);


