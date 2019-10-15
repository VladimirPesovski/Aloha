// const el = document.getElementsByTagName("submit")
// console.log(el)
// el[1].addEventListener("click", function(event){
//     event.preventDefault()
//     console.log(el[0].value)
//     alert("Thank you for subscribing")
// })


document.getElementById("submit").onclick = function() {subscribeButton()};

function subscribeButton() {
  document.getElementById("submit")
  alert("Thank you for subscribing")
}
