// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
one()
two()
three()
makeVisible()
}

function one () {
  var one = document.getElementById('one')
  one.classList.add('blue')
}
function two () {
  var two = document.getElementById('two')
  two.classList.add('green')
}
function three () {
  var three = document.getElementById('three')
  three.classList.add('orange')
}
function makeVisible () {
  var invisible = document.getElementsByClassName('invisible')
  invisible[0].classList.add('visible')
}
