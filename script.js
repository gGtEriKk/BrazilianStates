const list = document.querySelector('ul')
const showStates = document.querySelector('.show-states')
const showNorthStates = document.querySelector('.north-states')
const showNorthEastStates = document.querySelector('.northeast-states')
const showMidWestStates = document.querySelector('.midwest-states')
const showSouthEastStates = document.querySelector('.southeast-states')
const showSouthStates = document.querySelector('.south-states')
const showStatesQuantity = document.querySelector('.states-quantity')


// mostrar todos os produtos
function showAllStates(arrayStates) {
    let myListItems = ''

    arrayStates.forEach(state => {
        myListItems += `
            <li>
                <img src=${state.src}>
                <p class="state-name">${state.name}</p>
                <p><b>Capital:</b> ${state.capital}</p>
            </li>
        `
        list.innerHTML = myListItems
    })
}

function northStates() {
    const north = brazilianStates.filter(state => {
        return state.region === 'norte'
    })
    showAllStates(north)
}

function northEastStates() {
    const northeast = brazilianStates.filter(state => {
        return state.region === 'nordeste'
    })
    showAllStates(northeast)
}

function midwestStates() {
    const midwest = brazilianStates.filter(state => {
        return state.region === 'centro-oeste'
    })
    showAllStates(midwest)
}

function southEastStates(){
    const southeast = brazilianStates.filter(state => {
        return state.region === 'sudeste'
    })
    showAllStates(southeast)
}

function southStates(){
    const south = brazilianStates.filter(state => {
        return state.region === 'sul'
    })
    showAllStates(south)
}

function statesQuantity(){
    const quantity = brazilianStates.length
    
   list.innerHTML = `
        <div>
            <h1>O brasil possui ${quantity} estados</h1>
        <div/>
    `
}

showStates.addEventListener('click', () => showAllStates(brazilianStates))
showNorthStates.addEventListener('click', northStates)
showNorthEastStates.addEventListener('click', northEastStates)
showMidWestStates.addEventListener('click', midwestStates)
showSouthEastStates.addEventListener('click', southEastStates)
showSouthStates.addEventListener('click', southStates)
showStatesQuantity.addEventListener('click', statesQuantity)

