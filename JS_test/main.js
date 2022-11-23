// ts-check

// // for loop assignment 6
/*
let start = 0;
let swappedName = "elZerO";

swappedName = swappedName.split(``);


for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase()) {
        swappedName[i] = swappedName[i].toUpperCase();
    } else {
        swappedName[i] = swappedName[i].toLowerCase();
    }
}
console.log(swappedName.join(``));
    */

// // for loop assignment 7

/* 
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start; i < mix.length; i++) {
    mix[start] = typeof mix[start];
    if (typeof mix[i] === `string`) {
        continue;
    }
    console.log(mix[i]);
} 
    */

// // loop challange lesson 56

/* 
let myAdmins = [`Ahmed`, `Osama`, `Sayed`, `Stop`, `Samera`];
let myEmployees = [`Amgad`, `Samah`, `Ameer`, `Omar`, `Othman`, `Amany`, `Samia`];
myAdmins.splice(myAdmins.indexOf(`Stop`), myAdmins.length);
document.write(`<div>
We have ${myAdmins.length} Admins
</div>
<hr>`);
for (let i = 0; i < myAdmins.length; i++) {
    document.write(`<div>
    The Admin of team ${i + 1} is ${myAdmins[i]}
    </div>
    <h3>Team members</h3>`);
    let k = 1;
    for (let j = 0; j < myEmployees.length; j++) {
        if (myAdmins[i][0] === myEmployees[j][0]) {
            document.write(`<P>- ${k} ${myEmployees[j]}</P>`);
            k++;
        }
    }
    document.write(`<hr/>`);
} 
    */

// while loop assignment .. there is a problem with while used with if condition.

/*
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

for (let i = index; i < friends.length; i++) {
    if (friends[i][0] === `A` || typeof friends[i] === `number`) {
        continue;
    }
    console.log(`${counter + 1} => ${friends[i]}`);
    counter++;
}
*/

// // lesson 62 Function practice

/*
function showInfo(user = `Unknown`, age = `Unknown`, rate = 0, showSkills = true, ...skills) {
    document.write(`<div>`);
    document.write(`<h2>Welcome ${user} !</h2>`);
    document.write(`<p>Age : ${age}</p>`);
    document.write(`<p>Hour rate : $${rate}</p>`);
    if (showSkills === true) {
        if (skills.length > 0) {
            document.write(`<p>Skills :</p>`);
            for (let i = 0; i < skills.length; i++) {
                document.write(`<p>${skills[i]}</p>`);
            }
        } else {
            document.write(`<p>There is no skills</p>`);
        }
    } else {
        if (skills.length > 0) {
            document.write(`<p>Skills are hidden</p>`)
        } else {
            document.write(`<p>There is no skills</p>`);
        }
    }
    document.write(`</div>`);
}

showInfo(`Osama`, 34, 35, false);
*/

// // lesson 63 challange

/*
function showDetails(...restParameter) {
    let user = ``;
    let age = 0;
    let isAvialable = true;
    for (let i = 0; i < restParameter.length; i++) {
        typeof restParameter[i] === `string` ? user = restParameter[i] : typeof restParameter[i] === `number` ? age = restParameter[i] : isAvialable = restParameter[i]; 
    }
    isAvialable === true ? document.write(`<p>Hello ${user}, Your age is ${age}, You are avialable for hire</p>`) : document.write(`<p>Hello ${user}, Your age is ${age}, You aren't avialable for hire</p>`);
}

showDetails(`Osama`, 38, true);
showDetails(38, `Osama`, true);
showDetails(true, 40, `Sayed`);
showDetails(false, `Osama`, 38);
*/

// video 70 Challenge

/*
let names = function (...ourUsers) {
    return `String [${ourUsers.join(`], [`)}] => Done !`;
};

console.log(names(`Osama`, `Mohamed`, `Ali`, `Ibrahim`));
*/

/*
let names = (...ourUsers) => `String [${ourUsers.join(`], [`)}] => Done !`;

console.log(names(`Osama`, `Mohamed`, `Ali`, `Ibrahim`));
*/

// Assignments on lessons 57 => 63

// 1
/*
function sayHello(theName, theGender) {
    console.log(` Hello ${theGender === `Male` ? `Mr` : theGender === `Female` ? `Miss` : ``} ${theName}`);
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello(`Osman`, `Male`);
  sayHello(`Asmaa`, `Female`);
  sayHello("Sameh"); // "Hello Sameh"
*/

//2
/*
function calculate(firstNum, secondNum, operation) {
    if (operation === `add`) {
        console.log(firstNum + secondNum);
    } else if (operation === `subtract`) {
        console.log(firstNum - secondNum);
    } else if (operation === `multiply`) {
        console.log(firstNum * secondNum);
    } else if (operation === undefined) {
        if (secondNum === undefined) {
            console.log(`Secound Number is not found`);
        } else {
            console.log(firstNum + secondNum);
        }
    }
  }
  
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600
*/

// 3
/*
function ageInTime(theAge) {
    if (theAge > 10 && theAge < 100) {
        console.log(`Your age is ${theAge * 12} months`);
        console.log(`Your age is ${theAge * 12 * 4} weeks`);
        console.log(`Your age is ${theAge * 12 * 4 * 7} days`);
        console.log(`Your age is ${theAge * 12 * 4 * 7 * 24} hours`);
        console.log(`Your age is ${theAge * 12 * 4 * 7 * 24 * 60} minutes`);
        console.log(`Your age is ${theAge * 12 * 4 * 7 * 24 * 60 * 60} seconds`);
    } else {
        console.log(`Age is out of the range`);
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months
*/

// 4
/*
function checkStatus(a, b, c) {
let statusArray = [a, b, c];
for (let i =0; i < statusArray.length; i++) {
    if (typeof statusArray[i] === `string`) {
        a = statusArray[i];
    } else if (typeof statusArray[i] === `number`) {
        b = statusArray[i];
    } else if (typeof statusArray[i] === `boolean`) {
        c = statusArray[i];
    }
}
    document.write(`<p>Hello ${a}, Your age is ${b}, You Are ${c === true ? `Avialable` : `Not Avialable`} For Hire</p>`);
  }
  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/

// 5
/*
function createSelectBox(startYear, endYear) {
    document.write(`<select>`);
    for (let i = startYear; i <=endYear; i++) {
        document.write(`<option value ="${i}">${i}</option>`);
    }
    document.write(`</select>`);
  }
  createSelectBox(2000, 2021);
*/

// 6
/*
function multiply(...numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === `number`) {
        result *= Math.trunc(numbers[i]);
        }
    }
    console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
*/

// Assignments from lesson 64 to 70

// 1
/*
function getDetails(zName, zAge, zCountry) {
    function namePattern() {
        let shortName = zName.split(` `);
        return `${shortName[0]} ${shortName[1][0]}`;
    }
    function ageWithMessage() {
        return parseInt(zAge);
    }
    function countryTwoLetters() {
        return zCountry.slice(0, 2).toUpperCase();
    }
    function fullDetails() {
        return `Hello ${namePattern()}., Your Age Is ${ageWithMessage()}, You Live In ${countryTwoLetters()}`;
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY
*/

// 2
/*
let itsMe = _ => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function
//...................

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
*/

// 3

/*
function checker(zName) {
    return status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
  }
  
  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
*/

// 4

/*
function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (Number.isNaN(parseInt(data[i])) === true) {
      continue;
    }
    result += parseInt(data[i]);
  }
  return result || `All Are strings`;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
 console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
*/

// lesson 78 challenge

/*
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(`,`).filter(ele => isNaN(ele)).join(``).slice(true, -true).split(`_`).join(` `);

console.log(solution); // Elzero Web School
*/

// Lessons from 71 to 78 assignments

// 1

/*
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
console.log(mix.map(ele => typeof ele === `number` ? `` : ele).reduce((accum, ele) => accum + ele));
// Elzero
*/

// 2

/*
let myString = "EElllzzzzzzzeroo";
console.log(myString.split(``).reduce((accum, ele) => accum.slice(-1) + ele ===  ele + ele ? accum : accum + ele));
// Elzero
*/

// 4

/*
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
console.log(numsAndStrings.filter(ele => typeof ele === `number`).map(ele => -ele));
// [-1, -10, 10, 20, -5, -3]
*/

//5

/*
let nums = [2, 12, 11, 5, 10, 1, 99];
console.log(nums.reduce((accum, ele) => {
    return ele % 2 !== 0 ? accum + ele : accum * ele;
}, 1));
// 500
*/

// lessons from 79 to 85 assignments

// 1
/*
let member = {
    name: `Elzero`,
    age: 38,
    country: `Egypt`,
    fullDetails() {
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live In ${this.country}`
    }
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
*/

// 2
/*
let objMethodOne = {
    property: `Method One`
}
// Create Your Object Here

console.log(objMethodOne.property); // "Method One"

objMethodTwo = Object.assign({}, objMethodOne);
objMethodTwo.property = `Method Two`;

console.log(objMethodTwo.property); // "Method Two"

objMethodThree = Object.create(objMethodOne);
objMethodThree.property = `Mehod Three`;

console.log(objMethodThree.property); // "Method Three"

objMethodFour = new Object(objMethodOne);
objMethodFour.property = `Mehod four`;
console.log(objMethodFour.property); // "Method Four"
*/

// 3
/*
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({}, {"a": a}, threeNums, twoNums);

console.log(finalObject);
*/

// 4
console.log(typeof null);
