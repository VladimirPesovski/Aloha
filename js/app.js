//Prints value of x into console

const el = document.getElementsByTagName("submit")
console.log(el)
el[1].addEventListener("click", function(event){
    event.preventDefault()
    console.log(el[0].value)
    alert("Please enter a valid e-mail address")
})
