console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted');
}
let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);
let list = document.getElementById('compliment')
//list.childElementCount
function mouseoverHandler(evt) {
	let randomIndx = Math.floor(Math.random()*list.children.length)
	alert(list.children[randomIndx].textContent)
//alert(list.innerText)
}
let image = document.querySelector('img');
image.addEventListener('mouseover',mouseoverHandler)

const a = document.getElementsByClassName('crumb')
console.log(a);