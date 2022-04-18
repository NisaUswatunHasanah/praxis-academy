//String Object

const teman = new String("ike & chami");
console.log("ike & chami"); 

// Literal String

let firstString = "2 + 2";
let secondString =  new String("3 + 3"); 
console.log(firstString); //return 4
console.log(secondString); //return ("3 + 3") 

//string length

let hello = "Nisa Neyzo";
let helloLength = hello.length;
console.log(hello[3]);
//this returns "a"

*jika diaplikasikan di console web
var nama = "Nisa Uswatun Hasanah"
nama.length
//returns "20"

//methode charArt

const sentence = 'Belajar String charAt.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

output : The character at index 4 is j

//Regular Expression menggunakan groups and range

let personList = `First_Name: Nisa, Last_Name: Neyzo
First_Name: ike, Last_Name: adely`;

let regexpNames =  /First_Name: (\w+), Last_Name: (\w+)/mg;
let match = regexpNames.exec(personList);
do {
  console.log(`Hello ${match[1]} ${match[2]}`);
} while((match = regexpNames.exec(personList)) !== null);
