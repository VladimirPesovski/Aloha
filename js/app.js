//Prints value of x into console

const el = document.getElementsByTagName("input")
console.log(el)
el[1].addEventListener("click", function(event){
    event.preventDefault()
    console.log(el[0].value)
    alert("Please enter a valid e-mail address")
})

const num1 = 5
const num2 = 10
const num3 = 7
const num4 = 8


if (num1 > num2) {
    console.log(`${num1} is less than ${num2}`)
} else if (num1 === num2) {
    console.log(`${num1} is equal than ${num2}`)
} else {
    console.log(`${num1} is greater than ${num2}`)
}

num1 < num2 ? console.log("true") : console.log("false")