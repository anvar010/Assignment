let x = 10;
const y = 20;
let z = 2;
x = y + z;
console.log(x)

let greeting = "Hello";
if (greeting === "Hello") {
  console.log("Hi!");
} else {
  console.log("Goodbye!");
}

let num = "10";
let doubled = num * 2;
console.log(doubled);

let colors = ["red", "green", "blue"];
let favoriteColor = colors[2];
console.log("Favorite color : ",favoriteColor);


{

function add(x , y) {
  
return x + y;
}
let result = add(5,3);
console.log("Result : ",result);

}

let person = {
  firstName: "John",
  lastName: "Doe",
  age : 30 ,
};

console.log(person.age);


let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}

function multiply(x, y) {
  return x * y;
}

let product = multiply(3, "2");
console.log("Product:", product);

function greet(name) {
  return "Hello, " + name;
}

let username = "Alice";
console.log(greet(username));

let age = 30;//correction:the number was given in string
console.log("Age in 5 years:", age + 5);

let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: "A" },
  { name: "Charlie", grade: 92 },
];

for (let student of students) {
  if (student.grade >= 90) {
    console.log(student.name + " has an A grade.");
  }
}

console.log("End of the code");