let productsArray= [];
function showProductsList() {
    let htmlContentToAppend = "";
   
    for (let i = 0; i < productsArray.length; i++) {
        let product = productsArray[i];
        {
                htmlContentToAppend += `
                <div class="row cursor-active" onclick="redirectToInfo()">
                <div class="col-3">
                    <img src="${product.strDrinkThumb}" alt="${product.strDrink}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${product.strDrink}</h4>
                    </div>
                    <p class="mb-1">${product.strInstructions}</p>
                </div>
            </div>`;
        };
        
        document.getElementById("contenedor").innerHTML = htmlContentToAppend;
    };
};
document.addEventListener("DOMContentLoaded", function(){
document.getElementById('enviar').addEventListener('click', function() {
    let palabra = document.getElementById('buscador').value.toLowerCase();
   

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${palabra}`)
    .then(response => response.json())
    .then(data => {
        productsArray = data.drinks;
        showProductsList();
    })
    .catch(error => {
        console.error("Error al cargar los productos:", error);
    });

})

}); 