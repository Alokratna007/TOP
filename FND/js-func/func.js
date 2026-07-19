function sayMyName(name){
    console.log("My name is " + name)
}

sayMyName("Heisenberg")

// https://javascript.info/function-basics tasks:

// task 1: no difference

// task 2: rewriting function
// variant 1:
function checkAge(age){
    age > 18 ? true : confirm("Did parents allow you?")
}

input = prompt("Enter your age: ")

checkAge(input)

