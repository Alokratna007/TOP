function sayMyName(name){
    console.log("My name is " + name)
}

sayMyName("Heisenberg")

// https://javascript.info/function-basics tasks:

// task 1: no difference

// task 2 (variant 1): rewriting function

function checkAge(age){
    age > 18 ? true : confirm("Did parents allow you?")
}

input = prompt("Enter your age: ")

checkAge(input)

// variant 2:
function checkAge(age){
    return (age > 18) || confirm("Did parents allow you?")
}

input = prompt("Enter your age: ")

checkAge(input)

// task 3: min function
function minNo(a, b){
    if (a > b)
        alert(a)
    else
        alert(b)
}

minNo(4, 6)