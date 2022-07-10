const favColorBtn  = document.querySelector('#color')
const favPlaceBtn  = document.querySelector('#place')
const favRitualBtn  = document.querySelector('#ritual')
const displayfavColor = (evt) => alert(`My favorite color is Blue`)
const displayfavPlace = (evt) => alert(`My favorite place is Paris`)
const displayfavRitual = (evt) => alert(`Not sure about it ...`)


favColorBtn.addEventListener('click',displayfavColor)
favPlaceBtn.addEventListener('click',displayfavPlace)
favRitualBtn.addEventListener('click',displayfavRitual)

