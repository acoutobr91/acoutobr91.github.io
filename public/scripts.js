//const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const receita = document.querySelector('.detalhe');
const mostraIng = document.querySelector('.mostraIng');
const mostraPrep = document.querySelector('.mostraPrep');
const mostraInfo = document.querySelector('.mostraInfo');
const ingredient = document.querySelector('.ingredient')
const preparation = document.querySelector('.preparation')
const add_info = document.querySelector('.add_info')
for (let card of cards) {
    card.addEventListener("click", function() {
        const recipeId = card.getAttribute("id");
        window.location.href = `/recipe?id=${recipeId}`

    })
}

mostraIng.addEventListener("click", function() {

    if (document.querySelector('.mostraIng').innerText == "MOSTRAR") {
        document.querySelector('.mostraIng').innerText = "ESCONDER";
        ingredient.classList.remove('active');
    } else {
        document.querySelector('.mostraIng').innerText = "MOSTRAR";
        ingredient.classList.add('active');
    }
})
const variavel = mostraIng.querySelector("h4");
console.log(variavel);

mostraPrep.addEventListener("click", function() {

    if (document.querySelector('.mostraPrep').innerText == "MOSTRAR") {
        document.querySelector('.mostraPrep').innerText = "ESCONDER";
        preparation.classList.remove('active');
    } else {
        document.querySelector('.mostraPrep').innerText = "MOSTRAR";
        preparation.classList.add('active');
    }
})
mostraInfo.addEventListener("click", function() {

    if (document.querySelector('.mostraInfo').innerText == "MOSTRAR") {
        document.querySelector('.mostraInfo').innerText = "ESCONDER";
        add_info.classList.remove('active');
    } else {
        document.querySelector('.mostraInfo').innerText = "MOSTRAR";
        add_info.classList.add('active');
    }
})