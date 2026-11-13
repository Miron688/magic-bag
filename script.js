const toys = ["🐉", "🏵️", "🐬", "🐧", "🦄"]
const getToyBtn = document.getElementById("getToy")
const addToyBtn = document.getElementById("addToy")
const showAllBtn = document.getElementById("showAll")
const resultDiv = document.getElementById("result")
const toysListDiv = document.getElementById("toysList")

function getRandomToy(listToys) {
    const randomIndex =  Math.floor(Math.random() * listToys.length)
    const randomToy = listToys[randomIndex]
    resultDiv.innerHTML = randomToy
}

getToyBtn.addEventListener ('click', function() {
    getRandomToy(toys)
});

function addToy() {
    let newToys = ["🛬", "🏯", "🏰"]
    let randomIndex =  Math.floor(Math.random() * newToys.length)
    let randomToy = newToys[randomIndex]
    toys.push(randomToy)
     
}

addToyBtn.addEventListener ('click', function() {
    addToy()
})

function showAllToys() {
    toysListDiv.innerHTML = ''
        for (let toy of toys) {
        let toyElement = document.createElement('div')
        toyElement.className = 'toy-item'
        toyElement.textContent = toy
        toysListDiv.appendChild(toyElement)
    }
}

showAllBtn.addEventListener ('click', function() {
    showAllToys()
})