
//0.1:
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
let filteredNames = names.filter((name) => name.length > 3);
filteredNames.forEach(console.log);
console.log("//////////////////////////////////////////////////");


//0.2:
let uppercaseNames = names.map((name) => name.toUpperCase());
uppercaseNames.forEach(console.log);
console.log("//////////////////////////////////////////////////");


//0.3:
function arrayToHTMLString (array){
    let result = array.map((x) => `<li>${x}</li>`).join('');
    result = `<ul>${result}</ul>`;
    return result;
}

resultString = arrayToHTMLString(names);
console.log(resultString);
console.log("//////////////////////////////////////////////////");

//0.4:
let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

let newerThan1999 = cars.filter((car) => car.year > 1999);
newerThan1999.forEach(console.log);
console.log("//////////////////////////////////////////////////");

let allVolvos = cars.filter((car) => car.make == 'Volvo');
allVolvos.forEach(console.log);
console.log("//////////////////////////////////////////////////");  

let priceBelow5000 = cars.filter((car) => car.price < 5000);
priceBelow5000.forEach(console.log);
console.log("//////////////////////////////////////////////////");

//0.4.2:

function arrayToSQLString(array){
    let result = array.map((car) => `(${car.id},${car.year},${car.make},${car.model},${car.price})`).join(',');
    return `INSERT INTO cars (id, year, make, model, price) VALUES ${result};`;
}

let carSQL = arrayToSQLString(cars);
console.log(carSQL);

