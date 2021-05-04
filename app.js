/*let user={
    name:'Rahma',
    age:25,
    location:'Irbed',
    major: 'netwoek',
    blogs:['network ', 'security']
};
console.log(user.name);
console.log(user.age);
console.log(user['location']);
user['name'] ='Rahom';
console.log(user['name']);
console.log(typeof user);
console.log(user['blogs']);
console.log(user['major']);
function Person(name, eyecolor, age,updateAge) {
    this.name = name;
    this.eyecolor = eyecolor;
    this.age = age;
    // this.updateAge = function () {
    //     return this.age+=1;
    // };
}

Person.prototype.updateAge= function(){
    return this.age +=1;
}
let person01 = new Person("Rahma", "brown", 25);
let person02 = new Person("Azez", "black", 26);

console.log(person01.updateAge());
console.log(person02.updateAge());
//console.log(person02.name, person02.age);*/

'use strict'
const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let objcts = [];
function Shops(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.numberOfCusPerHour = [];
    this.avgCookiesPerchusedPerHour = [];
    this.total = 0;
    objcts.push(this);
}
// Helper function to get random numbers
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
Shops.prototype.getRandomNumOfCus = function () {
    for (let i = 0; i < hours.length; i++) {
        this.numberOfCusPerHour.push(getRandomInt(this.min, this.max));
    }
    return this.numberOfCusPerHour;
}
Shops.prototype.getAvgCookies = function () {
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesPerchusedPerHour.push(Math.floor(this.numberOfCusPerHour[i] * this.avg));
        this.total += this.avgCookiesPerchusedPerHour[i];
    }
    return this.avgCookiesPerchusedPerHour;
}
let seattel = new Shops('seattel', 23, 65, 6.3);
let tokyo = new Shops('Tokyo', 3, 24, 1.2);
let dubai = new Shops('Dubai', 11, 38, 3.7);
let paris = new Shops('Paris', 20, 38, 2.3);
let lima = new Shops('Lima', 2, 16, 4.6);
for (let i = 0; i < objcts.length; i++) {
    objcts[i].getRandomNumOfCus();
    objcts[i].getAvgCookies();
    // objcts[i].renderTable();
    // console.log(objcts[i])
}
console.log(objcts);
let container = document.getElementById('container');
function tableHeader() {
    let table = document.createElement('table');
    table.setAttribute('id', 'table-con');
    container.appendChild(table);
    let tRow = document.createElement('tr');
    table.appendChild(tRow);
    let tName = document.createElement('th');
    tRow.appendChild(tName);
    tName.textContent = 'Location Name'
    for (let i = 0; i < hours.length; i++) {
        let tHeader = document.createElement('th');
        tRow.appendChild(tHeader);
        tHeader.textContent = hours[i]
    }
    let dTotal = document.createElement('th');
    tRow.appendChild(dTotal);
    dTotal.textContent = 'Daily Location Total'
}
tableHeader();
Shops.prototype.renderTable = function () {
    let table1 = document.getElementById('table-con');
    let tRow1 = document.createElement('tr');
    table1.appendChild(tRow1);
    let td = document.createElement('td');
    tRow1.appendChild(td);
    td.textContent = this.name;
    for (let i = 0; i < hours.length; i++) {
        let td1 = document.createElement('td');
        tRow1.appendChild(td1);
        td1.textContent = this.avgCookiesPerchusedPerHour[i];
    }
    let td2 = document.createElement('td');
    tRow1.appendChild(td2);
    td2.textContent = this.total;
}
seattel.renderTable();
tokyo.renderTable();
dubai.renderTable();
paris.renderTable();
lima.renderTable();
function tableFooter() {
    let table1 = document.getElementById('table-con');
    let tRow1 = document.createElement('tr');
    table1.appendChild(tRow1);
    let total = document.createElement('th');
    tRow1.appendChild(total);
    total.textContent = 'Totals'
    let totalOfTotals = 0;
    for (let i = 0; i < hours.length; i++) {
        let totalOfRow = 0;
        for (let j = 0; j < objcts.length; j++) {
            totalOfRow += objcts[j].avgCookiesPerchusedPerHour[i]
        }
        totalOfTotals += totalOfRow;
        let td1 = document.createElement('td');
        tRow1.appendChild(td1);
        td1.textContent = totalOfRow;
    }
    let td2 = document.createElement('td');
    tRow1.appendChild(td2);
    td2.textContent = totalOfTotals;
}