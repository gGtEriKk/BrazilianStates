const list = document.querySelector('ul')
const showProducts = document.querySelector('.show-products')
const calculateDiscount = document.querySelector('.calculate-discount')
const sumPrices = document.querySelector('.sumPrices')
const showVeganProducts = document.querySelector('.show-vegans')

// mostrar todos os produtos
function showAllProducts(arrayProducts) {
    let myListItems = ''

    arrayProducts.forEach(product => {
        myListItems += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="price">R$${(product.price).toFixed(2)}</p>
            </li>
        `
        list.innerHTML = myListItems
    })
}

// mapear e adicionar 10% de desconto ao preço de cada produto
function calculate() {
    const newPrice = menuOptions.map(product => ({
        ...product,
        price: product.price - product.price / 10 // ou product.price * 0.9 para ter 10% de desconto
    }))
    showAllProducts(newPrice)
}

// somar todos os preços
function calculatePrices() {
    const sumPrices = menuOptions.reduce((price, currentPrice) => {
        return price + currentPrice.price
    }, 0)
    list.innerHTML = `
        <li>
            <p>O valor total dos produtos é de: R$${(sumPrices).toFixed(2)}</p>
        </li>
    `
}

// filtrar apenas os produtos veganos
function veganProducts() {
    const vegans = menuOptions.filter(product => {
        return product.vegan === true
    })
    showAllProducts(vegans)
}

showProducts.addEventListener('click', () => showAllProducts(menuOptions))
calculateDiscount.addEventListener('click', calculate)
sumPrices.addEventListener('click', calculatePrices)
showVeganProducts.addEventListener('click', veganProducts)